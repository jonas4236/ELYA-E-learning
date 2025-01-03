import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class CourseVideoService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(data: Prisma.course_videoCreateInput) {
    return this.databaseService.course_video.create({ data });
  }

  findAll() {
    return this.databaseService.course_video.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.course_video.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Prisma.course_videoCreateInput) {
    return `This action updates a #${id} courseVideo`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseVideo`;
  }
}
