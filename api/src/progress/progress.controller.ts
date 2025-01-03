import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProgressService } from './progress.service';
import { Prisma } from '@prisma/client';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post()
  create(@Body() data: Prisma.progressCreateInput) {
    return this.progressService.create(data);
  }

  @Get()
  findAll() {
    return this.progressService.findAll();
  }

  @Patch('/update')
  updateWatchedProgress(
    @Body('uid') uid: string,
    @Body('slug') slug: string,
    @Body('amount') amount: string,
  ) {
    return this.progressService.updateWatchedProgress(+uid, slug, +amount);
  }

  @Get('/course/:uid/:slug')
  findCourseBySlug(@Param('uid') uid: string, @Param('slug') slug: string) {
    return this.progressService.findCourseBySlug(+uid, slug);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.progressUpdateInput) {
    return this.progressService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.progressService.remove(+id);
  }
}
