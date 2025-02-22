import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TeacherCourseService } from './teacher-course.service';
import { Prisma } from '@prisma/client';

@Controller('teacher-course')
export class TeacherCourseController {
  constructor(private readonly teacherCourseService: TeacherCourseService) {}

  @Post()
  create(@Body() data: Prisma.teacher_courseCreateInput) {
    return this.teacherCourseService.create(data);
  }

  @Get()
  findAll() {
    return this.teacherCourseService.findAll();
  }

  @Post('course-relate')
  findAllCourseRelated(@Body('slug') slug: string) {
    return this.teacherCourseService.findAllCourseRelated(slug);
  }

  @Get(':slug')
  findAllReviewRelated(@Param('slug') slug: string) {
    return this.teacherCourseService.findAllReviewRelated(slug);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherCourseService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Prisma.teacher_courseUpdateInput,
  ) {
    return this.teacherCourseService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherCourseService.remove(+id);
  }
}
