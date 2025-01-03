import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EnrollmentService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(data: Prisma.enrollmentCreateInput) {
    return this.databaseService.enrollment.create({ data });
  }

  findAll() {
    return this.databaseService.enrollment.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.enrollment.findUnique({
      where: { id },
    });
  }

  findExistEnroll(uid: number, c_slug: string) {
    return this.databaseService.enrollment.findFirst({
      where: {
        userId: uid,
        course_slug: c_slug,
      },
    });
  }

  update(id: number, data: Prisma.enrollmentUpdateInput) {
    return `This action updates a #${id} enrollment`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrollment`;
  }
}
