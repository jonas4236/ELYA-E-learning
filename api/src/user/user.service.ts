import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, user } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { compare, hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(data: Prisma.userCreateInput): Promise<any> {
    const ExistUserInDB = await this.databaseService.user.findFirst({
      where: { username: data.username },
    });

    const ExistEmailInDB = await this.databaseService.user.findFirst({
      where: { email: data.email },
    });

    if (ExistEmailInDB || ExistUserInDB) {
      throw new HttpException(
        'This username or email is aleady exist!',
        HttpStatus.CONFLICT,
      );
    }

    return await this.databaseService.user.create({
      data: {
        ...data,
        password: await hash(data.password, 16),
      },
    });
  }

  // for response data (no password) in user controller
  async findByEmail(email: string): Promise<user | null> {
    const user = await this.databaseService.user.findFirst({
      where: { email: email },
    });

    return user;
  }

  async validateUser(email: string, password: string): Promise<user | null> {
    const user = await this.findByEmail(email);
    if (user && (await compare(password, user.password))) {
      return user;
    }

    return null;
  }

  async updateProfileImage(userId: number, image: string) {
    const existingUser = await this.databaseService.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return this.databaseService.user.update({
      where: { id: userId },
      data: { profile_img: image },
    });
  }

  updateSettingProfile(
    uid: number,
    f_name: string,
    l_name: string,
    phone: string,
    bio: string,
  ) {
    return this.databaseService.user.update({
      where: { id: uid },
      data: {
        first_name: f_name,
        last_name: l_name,
        phone: phone,
        biography: bio,
      },
    });
  }
}
