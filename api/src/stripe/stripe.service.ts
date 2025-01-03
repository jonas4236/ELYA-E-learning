import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { EnrollCourseService } from 'src/enroll-course/enroll-course.service';
import { EnrollmentService } from 'src/enrollment/enrollment.service';
import { CartService } from 'src/cart/cart.service';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(
    private configService: ConfigService,
    private enrollCourseService: EnrollCourseService,
    private enrollmentService: EnrollmentService,
    private cartService: CartService,
  ) {
    this.stripe = new Stripe(this.configService.get('STRIPE_API_KEY'), {
      apiVersion: '2024-09-30.acacia',
    });
  }

  async createCheckoutSession(cartItems) {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.product_name,
            images: [item.product_img],
          },
          unit_amount: item.price * 100,
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: `${this.configService.get('FRONTEND_URL')}/dashboard`,
      cancel_url: `${this.configService.get('FRONTEND_URL')}/cart`,
      metadata: {
        cart: JSON.stringify(
          cartItems.map((val) => ({
            id: val.id,
            userId: val.userId,
            courseId: val.product_id,
            slug: val.product_slug,
            profile_course: val.product_img,
            name_course: val.product_name,
            product_length: val.product_length,
            instructor: val.instructor,
            status: 'enrolled',
          })),
        ),
      },
    });

    return { url: session.url };
  }

  async handleWebhook(rawBody: Buffer, headers: any) {
    const signature = headers['stripe-signature'];
    const webhookSecret = this.configService.get('STRIPE_WEBHOOK_SECRET');

    // console.log('THIS IS rawBody: ', rawBody);
    // console.log('THIS IS headers: ', headers);

    try {
      const event = this.stripe.webhooks.constructEvent(
        rawBody,
        signature,
        webhookSecret,
      );

      switch (event.type) {
        case 'checkout.session.completed':
          const session = event.data.object;
          const getData = session.metadata;

          const data = JSON.parse(getData.cart);

          const dataFetchEnrollCourse = data.map((val) => ({
            userId: val.userId,
            courseId: val.courseId,
            slug: val.slug,
            profile_course: val.profile_course,
            instructor: val.instructor,
            name_course: val.name_course,
            status: 'enrolled',
            progress: {
              create: {
                watched_progress: 0,
                course_length: Number(val.product_length),
              },
            },
          }));

          const dataFetchEnrollment = data.map((val) => ({
            userId: val.userId,
            courseId: val.courseId,
            course_slug: val.slug,
          }));

          const dataFetchResetCart = data.map((val) => ({
            id: val.id,
            uid: val.userId,
          }));

          for (let i = 0; i < data.length; i++) {
            const dataEnrollCourse = dataFetchEnrollCourse[i];
            const dataEnrollment = dataFetchEnrollment[i];
            const dataResetCart = dataFetchResetCart[i];
            // console.log(item);
            await this.enrollCourseService.create(dataEnrollCourse).then(() => {
              console.log('Successfully added user data in enrollcourse.');
            });
            await this.enrollmentService.create(dataEnrollment).then(() => {
              console.log('Successfully added user data in enrollment.');
            });
            await this.cartService.remove(dataResetCart.id, dataResetCart.uid).then(() => {
              console.log('Successfully Clear Cart User.');
            });
          }

          // console.log(
          //   `success: checkout.session.completed: ${JSON.stringify(getData, null, 2)}`,
          // );
          // await this.handleSuccessfulPayment(session);
          break;

        case 'payment_intent.succeeded':
          const paymentIntent = event.data.object;
          // await this.handleSuccessfulPaymentIntent(paymentIntent);

          break;

        case 'payment_intent.payment_failed':
          const failedPayment = event.data.object;
          // await this.handleFailedPayment(failedPayment);
          break;

        default:
          // console.log(`Unhandled event type ${event.type}`);

          console.log('EVENT TYPE: ', event.type);
      }
    } catch (error) {
      console.log(`elya-webhooks error: ${error.message}`);
    }
  }
}
