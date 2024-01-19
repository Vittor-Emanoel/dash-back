import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { IAuthRepository } from '../auth.repository';

import { SignUpDto, UserCreatedDTO } from '../../dto/user.dto';

@Injectable()
export class AuthPrismaRepository implements IAuthRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: SignUpDto): Promise<UserCreatedDTO> {
    return await this.prisma.shepherd.create({
      data,
    });
  }
  async findByEmail(email: string): Promise<UserCreatedDTO | null> {
    return await this.prisma.admin.findUnique({
      where: {
        email: email,
      },
    });
  }
}
