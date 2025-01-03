import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { Prisma } from '@prisma/client';

@Controller('enrollment')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  create(@Body() data: Prisma.enrollmentCreateInput) {
    return this.enrollmentService.create(data);
  }

  @Get()
  findAll() {
    return this.enrollmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enrollmentService.findOne(+id);
  }

  @Get('user/:uid/:c_slug')
  findExistEnroll(@Param('uid') uid: string, @Param('c_slug') c_slug: string) {
    return this.enrollmentService.findExistEnroll(+uid, c_slug);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.enrollmentUpdateInput) {
    return this.enrollmentService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enrollmentService.remove(+id);
  }
}
