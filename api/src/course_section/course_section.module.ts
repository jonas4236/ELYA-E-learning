import { Module } from '@nestjs/common';
import { CourseSectionService } from './course_section.service';
import { CourseSectionController } from './course_section.controller';

@Module({
  controllers: [CourseSectionController],
  providers: [CourseSectionService],
})
export class CourseSectionModule {}
