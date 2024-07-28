import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(data: Prisma.userCreateInput) {
    return this.databaseService.user.create({ data });
  }

  findAll() {
    return this.databaseService.user.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Prisma.userUpdateInput) {
    return this.databaseService.user.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
