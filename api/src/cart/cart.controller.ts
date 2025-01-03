import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { Prisma } from '@prisma/client';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  create(@Body() data: Prisma.cartCreateInput) {
    return this.cartService.create(data);
  }

  @Get('/user/:id')
  findAllByUID(@Param('id') id: string) {
    return this.cartService.findAllByUID(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.cartUpdateInput) {
    return this.cartService.update(+id, data);
  }

  @Delete('del/:id/:uid')
  remove(@Param('id') id: string, @Param('uid') uid: string) {
    return this.cartService.remove(+id, +uid);
  }
}
