import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
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

  // @Get(':uid')
  // findCategoryUID(@Param('uid') uid: string) {
  //   return this.courseProductService.findCategoryUID(uid);
  // }

  @Get(':uid')
  findCategoryUID(
    @Param('uid') uid: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.courseProductService.findCategoryUID(
      uid,
      parseInt(page) || 1,
      parseInt(limit) || 8,
    );
  }

  @Get('/single/:param')
  findAllReviewRelate(@Param('param') param: string) {
    return this.courseProductService.findAllReviewRelate(param);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseProductService.findOne(+id);
  }

  @Patch('/updatereview')
  updateReview(
    @Body('slug') slug: string,
    @Body('rate') rate: string,
    @Body('count') count: string,
  ) {
    return this.courseProductService.updateReview(slug, +rate, +count);
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
