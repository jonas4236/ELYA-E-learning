import { Module } from '@nestjs/common';
import { CourseVideoService } from './course_video.service';
import { CourseVideoController } from './course_video.controller';

@Module({
  controllers: [CourseVideoController],
  providers: [CourseVideoService],
})
export class CourseVideoModule {}
