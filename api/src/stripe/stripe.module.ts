import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { ConfigModule } from '@nestjs/config';
import { EnrollCourseModule } from 'src/enroll-course/enroll-course.module';

@Module({
  imports: [ConfigModule, EnrollCourseModule],
  controllers: [StripeController],
  providers: [StripeService],
})
export class StripeModule {}
