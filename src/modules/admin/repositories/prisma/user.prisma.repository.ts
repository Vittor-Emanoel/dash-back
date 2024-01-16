import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';

import { UserCreatedDTO, UserProfileDTO } from 'src/modules/auth/dto/auth.dto';
import { AdminUpdate } from '../../dto';
import { IAdminsRepository } from '../user.repository';

@Injectable()
export class AdminsRepository implements IAdminsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserCreatedDTO[]> {
    return await this.prisma.admin.findMany({});
  }

  async findById(userId: string): Promise<UserCreatedDTO | null> {
    return await this.prisma.admin.findUnique({
      where: {
        id: userId,
      },
    });
  }
  async uploadAvatar(id: string, path: string): Promise<void> {
    await this.prisma.admin.update({
      data: {
        atavarUrl: path,
      },
      where: {
        id,
      },
    });
  }

  async updateRole(
    userId: string,
    role: AdminUpdate['role'],
  ): Promise<AdminUpdate | null> {
    const user = await this.prisma.admin.update({
      where: { id: userId },
      data: {
        role,
      },
      select: {
        name: true,
        email: true,
        role: true,
      },
    });

    return user;
  }
  async me(userId: string): Promise<UserProfileDTO | null> {
    const user = await this.prisma.admin.findUnique({
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
