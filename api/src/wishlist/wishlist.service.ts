import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class WishlistService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(data: Prisma.wishlistCreateInput) {
    return this.databaseService.wishlist.create({ data });
  }

  findAll() {
    return this.databaseService.wishlist.findMany({});
  }

  findOne(id: number) {
    return this.databaseService.wishlist.findUnique({
      where: { id },
    });
  }

  getByUser(uid: number) {
    return this.databaseService.wishlist.findMany({
      where: { userId: uid },
    });
  }

  update(id: number, data: Prisma.wishlistUpdateInput) {
    return this.databaseService.wishlist.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.databaseService.wishlist.delete({
      where: { id },
    });
  }
}
