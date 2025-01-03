import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CourseInfoService } from './course-info.service';
import { Prisma } from '@prisma/client';

@Controller('course-info')
export class CourseInfoController {
  constructor(private readonly courseInfoService: CourseInfoService) {}

  @Post()
  create(
    @Body()
    data: Prisma.course_infoCreateInput & {
      tag_course: { tag_name: string }[];
      tag: { tag_name: string }[];
      requirement: { require_name: string }[];
    },
  ) {
    return this.courseInfoService.create(data);
  }

  @Get()
  findAll() {
    return this.courseInfoService.findAll();
  }

  @Get('/name/:name')
  findByCourseProductName(@Param('name') name: string) {
    return this.courseInfoService.findByCourseProductName(name)
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.courseInfoService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.course_infoUpdateInput) {
    return this.courseInfoService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseInfoService.remove(+id);
  }
}
