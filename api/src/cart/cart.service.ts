import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { slugifyLib } from 'src/utils/slugify.util';

@Injectable()
export class CartService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(data: Prisma.cartCreateInput) {
    data.product_slug = slugifyLib(data.product_name);
    return this.databaseService.cart.create({ data });
  }

  findAllByUID(id: number) {
    return this.databaseService.cart.findMany({
      where: { userId: id },
    });
  }

  findOne(id: number) {
    return this.databaseService.cart.findUnique({
      where: { id },
    });
  }

  update(id: number, data: Prisma.cartUpdateInput) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number, uid: number) {
    return this.databaseService.cart.delete({
      where: {
        id: id,
        userId: uid,
      },
    });
  }
}
