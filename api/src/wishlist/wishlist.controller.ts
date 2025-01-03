import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { Prisma } from '@prisma/client';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  create(@Body() data: Prisma.wishlistCreateInput) {
    return this.wishlistService.create(data);
  }

  @Get()
  findAll() {
    return this.wishlistService.findAll();
  }

  @Get('/get/:uid')
  getByUser(@Param('uid') uid: string) {
    return this.wishlistService.getByUser(+uid);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishlistService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.wishlistUpdateInput) {
    return this.wishlistService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishlistService.remove(+id);
  }
}
