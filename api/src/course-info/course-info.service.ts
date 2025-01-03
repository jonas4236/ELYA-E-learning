import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { slugifyLib } from 'src/utils/slugify.util';

@Injectable()
export class CourseInfoService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(
    data: Prisma.course_infoCreateInput & {
      tag_course: { tag_name: string }[];
      tag: { tag_name: string }[];
      requirement: { require_name: string }[];
    },
  ) {
    return this.databaseService.course_info.create({
      data: {
        ...data,
        tag_course: {
          create: data.tag_course,
        },
        tag: {
          create: data.tag.map((t) => ({
            tag_name: t.tag_name,
            tag_slug: slugifyLib(t.tag_name),
          })),
        },
        requirement: {
          create: data.requirement,
        },
      },
      include: {
        tag_course: true,
        tag: true,
        requirement: true,
      },
    });
  }
  
  findAll() {
    return this.databaseService.course_info.findMany({
      include: {
        tag_course: true,
        tag: true,
        requirement: true,
      },
    });
  }

  findByCourseProductName(name: string) {
    return this.databaseService.course_info.findMany({
      where: { courseProductName: name },
      include: {
        tag_course: true,
        tag: true,
        requirement: true,
      },
    });
  }

  findOne(id: number) {
    return this.databaseService.course_info.findUnique({
      where: { id },
      include: {
        tag_course: true,
        tag: true,
        requirement: true,
      },
    });
  }


  update(id: number, data: Prisma.course_infoUpdateInput) {
    return this.databaseService.course_info.update({
      where: { id },
      data,
      include: {
        tag_course: true,
        tag: true,
        requirement: true,
      },
    });
  }

  remove(id: number) {
    return this.databaseService.course_info.delete({
      where: { id },
    });
  }
}
