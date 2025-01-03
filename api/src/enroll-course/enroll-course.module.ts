import { Module } from '@nestjs/common';
import { EnrollCourseService } from './enroll-course.service';
import { EnrollCourseController } from './enroll-course.controller';

@Module({
  controllers: [EnrollCourseController],
  providers: [EnrollCourseService],
  exports: [EnrollCourseService],
})
export class EnrollCourseModule {}
