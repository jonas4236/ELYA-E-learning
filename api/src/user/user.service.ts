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

  async findByEmail(email: string): Promise<user | null> {
    const user = await this.databaseService.user.findFirst({
      where: { email: email },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        username: true,
        email: true,
        career: true,
        phone: true,
        biography: true,
        password: false,
      },
    });

    return user;
  }

  async findByEmailInCludePassword(email: string): Promise<user | null> {
    return await this.databaseService.user.findFirst({
      where: { email: email },
    });
  }

  async validateUser(email: string, password: string): Promise<user | null> {
    const user = await this.findByEmailInCludePassword(email);
    if (user && user.password) {
      const isPasswordExist = await compare(password, user.password);

      if (isPasswordExist) {
        const { password, ...newValueWithoutPassword } = user;
        return newValueWithoutPassword;
      }
    }

    return null;
  }
}
