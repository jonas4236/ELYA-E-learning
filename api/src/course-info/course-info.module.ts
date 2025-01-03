import { Module } from '@nestjs/common';
import { CourseInfoService } from './course-info.service';
import { CourseInfoController } from './course-info.controller';

@Module({
  controllers: [CourseInfoController],
  providers: [CourseInfoService],
})
export class CourseInfoModule {}
