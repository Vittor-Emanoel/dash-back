import { PrismaService } from '@/shared/database/prisma.service';
import { Injectable } from '@nestjs/common';

import { User } from '@/shared/entities/User';
import { CreateUserDto } from '../../dto/signup.dto';
import { IAuthRepository } from '../auth.repository';

@Injectable()
export class AuthPrismaRepository implements IAuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const { name, email, password } = data;

    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user;
  }
}
