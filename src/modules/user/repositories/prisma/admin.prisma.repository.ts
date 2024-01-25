import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';

import { AdminProfileDTO, UserUpdated } from '../../dto/user.dto';
import { IUserRepository } from '../user.repository';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserUpdated[]> {
    return await this.prisma.user.findMany();
  }

  async findById(userId: string): Promise<UserUpdated | null> {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
  async uploadAvatar(id: string, path: string): Promise<void> {
    await this.prisma.user.update({
      data: {
        atavarUrl: path,
      },
      where: {
        id,
      },
    });
  }

  async me(userId: string): Promise<AdminProfileDTO | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        atavarUrl: true,
        createdAt: true,
      },
    });
    return user;
  }
}
