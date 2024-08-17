import { PrismaService } from '@/shared/database/prisma.service';
import { Injectable } from '@nestjs/common';

import { IUsersRepository } from '../users.repository';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(private readonly prisma: PrismaService) {}


  async me(userId: string): Promise<{
    id: string;
    name: string;
    email: string;
} | null> {
    const user = await this.prisma.user.findFirst({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    return user;
  }
}
