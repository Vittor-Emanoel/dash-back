import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';

import { AdminProfileDTO } from '../../dto';
import { CreateAdminDTO } from '../../dto/create-admin.dto';
import { IAdminsRepository } from '../admin.repository';

@Injectable()
export class AdminsRepository implements IAdminsRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CreateAdminDTO[]> {
    return await this.prisma.admin.findMany();
  }

  async findById(userId: string): Promise<CreateAdminDTO | null> {
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

  async me(userId: string): Promise<AdminProfileDTO | null> {
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
