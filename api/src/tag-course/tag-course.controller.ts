import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagCourseService } from './tag-course.service';
import { Prisma } from '@prisma/client';

@Controller('tag-course')
export class TagCourseController {
  constructor(private readonly tagCourseService: TagCourseService) {}

  @Post()
  create(@Body() data: Prisma.tag_courseCreateInput) {
    return this.tagCourseService.create(data);
  }

  @Get()
  findAll() {
    return this.tagCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagCourseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.tag_courseUpdateInput) {
    return this.tagCourseService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagCourseService.remove(+id);
  }
}
