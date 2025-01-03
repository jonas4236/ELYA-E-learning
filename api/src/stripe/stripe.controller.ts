import { Body, Controller, Headers, Post, Req } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('checkout-session')
  async createCheckOutSession(@Body('cartItems') cartItems: any) {
    return this.stripeService.createCheckoutSession(cartItems);
  }

  @Post('webhook')
  async handleWebhook(@Req() req: any, @Headers() headers: any) {
    await this.stripeService.handleWebhook(req.body, headers);
  }
}
