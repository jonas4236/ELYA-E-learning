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
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';
import { CartModule } from './cart/cart.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { EnrollCourseModule } from './enroll-course/enroll-course.module';
import { ProgressModule } from './progress/progress.module';
import { CheckCourseModule } from './check-course/check-course.module';
import { AuthModule } from './auth/auth.module';
import { StripeModule } from './stripe/stripe.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the config module globally available
    }),
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
    UserModule,
    ReviewModule,
    CartModule,
    WishlistModule,
    EnrollmentModule,
    EnrollCourseModule,
    ProgressModule,
    CheckCourseModule,
    AuthModule,
    StripeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
