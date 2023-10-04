import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';

import { UserCreatedDTO } from 'src/modules/auth/dto/auth.dto';
import { IUsersRepository } from '../user.repository';

import { Role, UpdateUserDto } from '../../dto/update.dto';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private prisma: PrismaService) {}

  async findById(userId: string): Promise<UserCreatedDTO | null> {
    return await this.prisma.users.findUnique({
      where: {
        id: userId,
      },
    });
  }
  async uploadAvatar(id: string, path: string): Promise<void> {
    return null;
  }

  async updateRole(userId: string, role: Role): Promise<UpdateUserDto | null> {
    const user = await this.prisma.users.update({
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
}
