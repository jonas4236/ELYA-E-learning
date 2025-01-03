import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

export interface courseVideoType {
  sectionId: number;
  userId: number;
  video_title: string;
  video_url: string;
  duration: string;
}

@Injectable()
export class CourseSectionService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(
    data: Prisma.course_sectionCreateInput & {
      course_video: courseVideoType[];
    },
  ) {
    return this.databaseService.course_section.create({
      data: {
        ...data,
        course_video: {
          create: data.course_video,
        },
      },
      include: {
        course_video: true,
      },
    });
  }

  findVideoAndNoReturnURL(name: string) {
    return this.databaseService.course_section.findMany({
      where: { course_product_name: name },
      include: {
        course_video: {
          select: {
            id: true,
            sectionId: true,
            video_title: true,
            duration: true,
          }
        }
      }
    });
  }

  findCourseProdcutName(name: string) {
    return this.databaseService.course_section.findMany({
      where: { course_product_name: name },
      include: {
        course_video: true,
      },
    });
  }

  findAll() {
    return this.databaseService.course_section.findMany({
      include: {
        course_video: true,
      },
    });
  }

  findOne(id: number) {
    return this.databaseService.course_section.findUnique({
      where: { id },
      include: {
        course_video: true,
      },
    });
  }

  update(id: number, data: Prisma.course_sectionUpdateInput) {
    return `business logic update`;
  }

  remove(id: number) {
    return `business logic remove`;
  }
}
