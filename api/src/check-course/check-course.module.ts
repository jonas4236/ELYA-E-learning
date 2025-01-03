import { Module } from '@nestjs/common';
import { CheckCourseService } from './check-course.service';
import { CheckCourseController } from './check-course.controller';

@Module({
  controllers: [CheckCourseController],
  providers: [CheckCourseService],
})
export class CheckCourseModule {}
