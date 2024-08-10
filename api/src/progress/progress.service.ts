import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProgressService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(data: Prisma.progressCreateInput) {
    return this.databaseService.progress.create({ data });
  }

  findAll() {
    return this.databaseService.progress.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.progress.findUnique({
      where: { id },
    });
  }

  findCourseBySlug(uid: number, slug: string) {
    return this.databaseService.progress.findFirst({
      where: { enroll_user_id: uid, enroll_course_slug: slug },
    });
  }

  update(id: number, data: Prisma.progressUpdateInput) {
    return `This action updates a #${id} progress`;
  }

  remove(id: number) {
    return `This action removes a #${id} progress`;
  }
}
