import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { slugifyLib } from 'src/utils/slugify.util';

@Injectable()
export class TeacherCourseService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(data: Prisma.teacher_courseCreateInput) {
    data.full_name_slug = slugifyLib(data.full_name);
    return this.databaseService.teacher_course.create({ data });
  }

  findAll() {
    return this.databaseService.teacher_course.findMany({});
  }

  findAllReviewRelated(slug: string) {
    return this.databaseService.teacher_course.findMany({
      where: { full_name_slug: slug },
      include: {
        review: true,
      },
    });
  }

  findAllCourseRelated(slug: string) {
    return this.databaseService.teacher_course.findMany({
      where: { full_name_slug: slug },
      include: {
        course_product: true,
      },
    });
  }

  findOne(id: number) {
    return this.databaseService.teacher_course.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Prisma.teacher_courseUpdateInput) {
    return `This action updates a #${id} teacherCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacherCourse`;
  }
}
