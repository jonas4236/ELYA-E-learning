import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CheckCourseService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(data: Prisma.check_courseCreateInput) {
    return this.databaseService.check_course.create({ data });
  }

  findAll() {
    return this.databaseService.check_course.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.check_course.findUnique({
      where: { id },
    });
  }

  findIDSectionAndUser(uid: number, sid: string) {
    return this.databaseService.check_course.findMany({
      where: { userId: uid, slug: sid },
    });
  }

  update(id: number, data: Prisma.check_courseUpdateInput) {
    return this.databaseService.check_course.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} checkCourse`;
  }
}
