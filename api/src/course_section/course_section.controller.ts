import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  CourseSectionService,
  courseVideoType,
} from './course_section.service';
import { Prisma } from '@prisma/client';

@Controller('course-section')
export class CourseSectionController {
  constructor(private readonly courseSectionService: CourseSectionService) {}

  @Post()
  create(
    @Body()
    data: Prisma.course_sectionCreateInput & {
      course_video: courseVideoType[];
    },
  ) {
    return this.courseSectionService.create(data);
  }

  @Get()
  findAll() {
    return this.courseSectionService.findAll();
  }

  @Get(':name')
  findCourseProductName(@Param('name') name: string) {
    return this.courseSectionService.findCourseProdcutName(name);
  }

  @Get("/course/:name")
  findVideoAndNoReturnURL(@Param('name') name: string) {
    return this.courseSectionService.findVideoAndNoReturnURL(name)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseSectionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Prisma.course_sectionUpdateInput,
  ) {
    return this.courseSectionService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseSectionService.remove(+id);
  }
}
