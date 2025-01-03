import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EnrollCourseService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(data: Prisma.enroll_courseCreateInput) {
    return this.databaseService.enroll_course.create({
      data: {
        ...data,
        progress: {
          create: {
            ...data.progress.create,
            enroll_user_id: data.userId,
            enroll_course_slug: data.slug,
          },
        },
      },
      include: {
        progress: true,
      },
    });
  }

  findAll() {
    return this.databaseService.enroll_course.findMany({
      include: {
        progress: true,
        review: true,
      },
    });
  }

  findEachUserEnroll(uid: number) {
    return this.databaseService.enroll_course.findMany({
      where: { userId: uid },
      include: {
        progress: true,
        review: true,
      },
    });
  }
   
  GetOne(uid: number) {
    return this.databaseService.enroll_course.findMany({
      where: {
        userId: uid,
      },
      include: {
        progress: true,
        review: true,
      }
    });
  }

  updateStatus(uid: number, slug: string) {
    return this.databaseService.enroll_course.updateMany({
      where: {
        userId: uid,
        slug: slug,
      },
      data: {
        status: 'completed',
      },
    });
  }

  update(id: number, data: Prisma.enroll_courseUpdateInput) {
    return `This action updates a #${id} enrollCourse`;
  }

  remove(id: number) {
    return `This action removes a #${id} enrollCourse`;
  }
}
