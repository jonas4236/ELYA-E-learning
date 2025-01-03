import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnrollCourseService } from './enroll-course.service';
import { Prisma } from '@prisma/client';

@Controller('enroll-course')
export class EnrollCourseController {
  constructor(private readonly enrollCourseService: EnrollCourseService) {}

  @Post()
  create(@Body() data: Prisma.enroll_courseCreateInput) {
    return this.enrollCourseService.create(data);
  }

  @Get()
  findAll() {
    return this.enrollCourseService.findAll();
  }

  @Get('/user/:uid')
  findEachUserEnroll(@Param('uid') uid: string) {
    return this.enrollCourseService.findEachUserEnroll(+uid);
  }

  @Post('/getOne')
  findOne(
    @Body('uid') uid: number,
  ) {
    return this.enrollCourseService.GetOne(uid);
  }

  @Patch('/status')
  updateStatus(
    @Body('uid') uid: string,
    @Body('slug') slug: string,
  ) {
    return this.enrollCourseService.updateStatus(+uid, slug);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Prisma.enroll_courseUpdateInput,
  ) {
    return this.enrollCourseService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrollCourseService.remove(+id);
  }
}
