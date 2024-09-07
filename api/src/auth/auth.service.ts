import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly JwtService: JwtService,
    private readonly UserService: UserService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.UserService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const payload = { email: user.email, id: user.id };
    return {
      acces_token: this.JwtService.sign(payload),
    };
  }
}
