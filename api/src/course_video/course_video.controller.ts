import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseVideoService } from './course_video.service';
import { Prisma } from '@prisma/client';

@Controller('course-video')
export class CourseVideoController {
  constructor(private readonly courseVideoService: CourseVideoService) {}

  @Post()
  create(@Body() data: Prisma.course_videoCreateInput) {
    return this.courseVideoService.create(data);
  }

  @Get()
  findAll() {
    return this.courseVideoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseVideoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.course_videoCreateInput) {
    return this.courseVideoService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseVideoService.remove(+id);
  }
}
