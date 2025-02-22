import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoryCourseService } from './category-course.service';
import { Prisma } from '@prisma/client';

@Controller('category-course')
export class CategoryCourseController {
  constructor(private readonly categoryCourseService: CategoryCourseService) {}

  @Post()
  create(@Body() data: Prisma.category_courseCreateInput) {
    return this.categoryCourseService.createCategory(data);
  }

  @Get('popular')
  findPopularCategory() {
    return this.categoryCourseService.findPopularCategory();
  }

  @Get()
  findAll() {
    return this.categoryCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryCourseService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Prisma.category_courseUpdateInput,
  ) {
    return this.categoryCourseService.updateCategory(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryCourseService.remove(+id);
  }
}
