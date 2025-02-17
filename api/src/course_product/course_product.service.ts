import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { match } from 'assert';
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

  // findCategoryUID(uid: string) {
  //   return this.databaseService.course_product.findMany({
  //     where: { categoryUID: uid },
  //     include: { teacher_course: true, review: true },
  //   });
  // }

  async findCategoryUID(uid: string, page: number = 1, limit: number = 8) {
    const offset = (page - 1) * limit;

    const [data, total] = await this.databaseService.$transaction([
      this.databaseService.course_product.findMany({
        where: { categoryUID: uid },
        include: { teacher_course: true, review: true },
        skip: offset,
        take: limit,
      }),
      this.databaseService.course_product.count({
        where: { categoryUID: uid },
      }),
    ]);

    return {
      data,
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    };
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

  updateReview(slug: string, rate: number, count: number) {
    return this.databaseService.course_product.update({
      where: { slug: slug },
      data: {
        stars: rate,
        num_review: count,
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
