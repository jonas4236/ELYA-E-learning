import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequirementService } from './requirement.service';
import { Prisma } from '@prisma/client';

@Controller('requirement')
export class RequirementController {
  constructor(private readonly requirementService: RequirementService) {}

  @Post()
  create(@Body() data: Prisma.requirementCreateInput) {
    return this.requirementService.create(data);
  }

  @Get()
  findAll() {
    return this.requirementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requirementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.requirementUpdateInput) {
    return this.requirementService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requirementService.remove(+id);
  }
}
