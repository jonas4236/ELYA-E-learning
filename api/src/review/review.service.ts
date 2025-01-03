import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ReviewService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(data: Prisma.reviewCreateInput) {
    return this.databaseService.review.create({ data });
  }

  findAll() {
    return this.databaseService.review.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.review.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Prisma.reviewUpdateInput) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
