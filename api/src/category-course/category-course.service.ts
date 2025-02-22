import { Body, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { slugifyLib } from 'src/utils/slugify.util';

@Injectable()
export class CategoryCourseService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createCategory(data: Prisma.category_courseCreateInput) {
    data.category_slug = slugifyLib(data.category_name);
    return this.databaseService.category_course.create({ data });
  }

  findPopularCategory() {
    return this.databaseService.category_course.findMany({
      take: 8,
      orderBy: { id: 'asc' },
    });
  }

  findAll() {
    return this.databaseService.category_course.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.category_course.findUnique({
      where: { id },
    });
  }

  async updateCategory(id: number, data: Prisma.category_courseUpdateInput) {
    if (data.category_name) {
      data.category_slug = slugifyLib(data.category_name as string);
    }
    return this.databaseService.category_course.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} categoryCourse`;
  }
}
