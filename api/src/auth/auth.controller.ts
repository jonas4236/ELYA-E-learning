import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { response, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { acces_token } = await this.authService.login(email, password);
    response.cookie('access_token', acces_token, {
      httpOnly: false,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 3600000,
    });
    // console.log("access_token:", acces_token);

    return { message: 'logged in successfully', token: acces_token };
  }

  @Post('/logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('access_token');
    return { message: 'logged out successfully' };
  }
}
