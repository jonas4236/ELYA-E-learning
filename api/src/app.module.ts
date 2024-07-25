import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CategoryCourseModule } from './category-course/category-course.module';
import { CourseProductModule } from './course_product/course_product.module';
import { TeacherCourseModule } from './teacher-course/teacher-course.module';
import { CourseInfoModule } from './course-info/course-info.module';
import { TagCourseModule } from './tag-course/tag-course.module';
import { TagsModule } from './tags/tags.module';
import { RequirementModule } from './requirement/requirement.module';
import { CourseSectionModule } from './course_section/course_section.module';
import { CourseVideoModule } from './course_video/course_video.module';

@Module({
  imports: [
    DatabaseModule,
    CategoryCourseModule,
    CourseProductModule,
    TeacherCourseModule,
    CourseInfoModule,
    TagCourseModule,
    TagsModule,
    RequirementModule,
    CourseSectionModule,
    CourseVideoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
