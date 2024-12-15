import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: Prisma.userCreateInput) {
    return this.userService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async getProfile(@Req() req: Request & any) {
    return this.userService.findByEmail(req.user.email);
  }
}
