import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RequirementService {
  constructor(private readonly databaseService: DatabaseService) {}

  create(data: Prisma.requirementCreateInput) {
    return this.databaseService.requirement.create({ data });
  }

  findAll() {
    return this.databaseService.requirement.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.requirement.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Prisma.requirementUpdateInput) {
    return `This action updates a #${id} requirement`;
  }

  remove(id: number) {
    return `This action removes a #${id} requirement`;
  }
}
