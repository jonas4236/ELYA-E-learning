import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { ConfigModule } from '@nestjs/config';
import { EnrollCourseModule } from 'src/enroll-course/enroll-course.module';
import { EnrollmentModule } from 'src/enrollment/enrollment.module';
import { CartModule } from 'src/cart/cart.module';

@Module({
  imports: [ConfigModule, EnrollCourseModule, EnrollmentModule, CartModule],
  controllers: [StripeController],
  providers: [StripeService],
})
export class StripeModule {}
