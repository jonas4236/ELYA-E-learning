import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseProductService } from './course_product.service';
import { Prisma } from '@prisma/client';

@Controller('course-product')
export class CourseProductController {
  constructor(private readonly courseProductService: CourseProductService) {}

  @Post()
  create(@Body() data: Prisma.course_productCreateInput) {
    return this.courseProductService.createCourseProduct(data);
  }

  @Get()
  findAll() {
    return this.courseProductService.findAll();
  }

  @Get(':uid')
  findCategoryUID(@Param('uid') uid: string) {
    return this.courseProductService.findCategoryUID(uid);
  }

  @Get('/single/:param')
  findAllReviewRelate(@Param('param') param: string) {
    return this.courseProductService.findAllReviewRelate(param);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseProductService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Prisma.course_productUpdateInput,
  ) {
    return this.courseProductService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseProductService.remove(+id);
  }
}
