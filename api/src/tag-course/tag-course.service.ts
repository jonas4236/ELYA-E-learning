import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class TagCourseService {
  constructor(private readonly dataService: DatabaseService) {}
  create(data: Prisma.tag_courseCreateInput) {
    return this.dataService.tag_course.create({ data });
  }

  findAll() {
    return this.dataService.tag_course.findMany({});
  }

  findOne(id: number) {
    return this.dataService.tag_course.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Prisma.tag_courseUpdateInput) {
    return `This action updates a #${id} tagCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} tagCourse`;
  }
}
