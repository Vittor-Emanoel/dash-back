import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { IAuthRepository } from '../auth.repository';

import { UserCreatedDTO } from '../../dto/auth.dto';

@Injectable()
export class AuthPrismaRepository implements IAuthRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: UserCreatedDTO): Promise<UserCreatedDTO> {
    return await this.prisma.user.create({
      data,
    });
  }
  async findByEmail(email: string): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
}
