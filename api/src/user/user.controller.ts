import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  Patch,
  Param,
} from '@nestjs/common';
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

  @Patch('/changepic/:uid')
  async updateProfileImage(
    @Param('uid') uid: string,
    @Body('profileImg') profileImg: string,
  ) {
    const user = await this.userService.updateProfileImage(+uid, profileImg);
    return { message: 'profile image updated successfully', user };
  }

  @Patch('/setting')
  async updateSettingProfile(
    @Body('uid') uid: string,
    @Body('f_name') f_name: string,
    @Body('l_name') l_name: string,
    @Body('phone') phone: string,
    @Body('bio') bio: string,
  ) {
    await this.userService.updateSettingProfile(
      +uid,
      f_name,
      l_name,
      phone,
      bio,
    );

    return { message: 'update setting profile successfully!' };
  }
}
