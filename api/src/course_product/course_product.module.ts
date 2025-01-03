import { Module } from '@nestjs/common';
import { CourseProductService } from './course_product.service';
import { CourseProductController } from './course_product.controller';

@Module({
  controllers: [CourseProductController],
  providers: [CourseProductService],
})
export class CourseProductModule {}
