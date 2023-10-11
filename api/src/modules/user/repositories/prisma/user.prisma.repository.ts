import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';

import { UserCreatedDTO, UserProfileDTO } from 'src/modules/auth/dto/auth.dto';
import { IUsersRepository } from '../user.repository';

import { Role, UpdateUserDto } from '../../dto/update.dto';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private prisma: PrismaService) {}

  async findById(userId: string): Promise<UserCreatedDTO | null> {
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

  async updateRole(userId: string, role: Role): Promise<UpdateUserDto | null> {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: {
        role: role,
      },
      select: {
        name: true,
        email: true,
        role: true,
      },
    });

    return { ...user, role };
  }
  async me(userId: string): Promise<UserProfileDTO | null> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        atavarUrl: true,
        createdAt: true,
        Church: {
          select: {
            name: true,
          },
        },
      },
    });
    return user;
  }
}
