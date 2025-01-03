import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { slugifyLib } from 'src/utils/slugify.util';

@Injectable()
export class CourseProductService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createCourseProduct(data: Prisma.course_productCreateInput) {
    data.slug = slugifyLib(data.name_course);
    return this.databaseService.course_product.create({ data });
  }

  findAll() {
    return this.databaseService.course_product.findMany({
      include: {
        teacher_course: true,
      },
    });
  }

  findCategoryUID(uid: string) {
    return this.databaseService.course_product.findMany({
      where: { categoryUID: uid },
      include: { teacher_course: true, review: true },
    });
  }

  findAllReviewRelate(param: string) {
    return this.databaseService.course_product.findMany({
      where: { slug: param },
      include: {
        teacher_course: true,
        review: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} courseProduct`;
  }

  update(id: number, data: Prisma.course_productUpdateInput) {
    return `This action updates a #${id} courseProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseProduct`;
  }
}
