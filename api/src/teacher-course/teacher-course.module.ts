import { Module } from '@nestjs/common';
import { TeacherCourseService } from './teacher-course.service';
import { TeacherCourseController } from './teacher-course.controller';

@Module({
  controllers: [TeacherCourseController],
  providers: [TeacherCourseService],
})
export class TeacherCourseModule {}
