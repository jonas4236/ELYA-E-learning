import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CheckCourseService } from './check-course.service';
import { Prisma } from '@prisma/client';

@Controller('check-course')
export class CheckCourseController {
  constructor(private readonly checkCourseService: CheckCourseService) {}

  @Post()
  create(@Body() data: Prisma.check_courseCreateInput) {
    return this.checkCourseService.create(data);
  }

  @Get()
  findAll() {
    return this.checkCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkCourseService.findOne(+id);
  }

  @Get('/vid/:uid/:sid')
  findIDSectionAndUser(@Param('uid') uid: string, @Param('sid') sid: string) {
    return this.checkCourseService.findIDSectionAndUser(+uid, sid);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Prisma.check_courseUpdateInput,
  ) {
    return this.checkCourseService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkCourseService.remove(+id);
  }
}
