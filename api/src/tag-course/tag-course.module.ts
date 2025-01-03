import { Module } from '@nestjs/common';
import { TagCourseService } from './tag-course.service';
import { TagCourseController } from './tag-course.controller';

@Module({
  controllers: [TagCourseController],
  providers: [TagCourseService],
})
export class TagCourseModule {}
