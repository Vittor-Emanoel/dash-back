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

    // const organization = await this.prisma.user.create({
    //   data: 
    // });

    // return organization;
  }
}
