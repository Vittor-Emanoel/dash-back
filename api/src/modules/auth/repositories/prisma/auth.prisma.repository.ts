import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { IAuthRepository } from '../auth.repository';
import { CreateUserDto } from 'src/modules/users/dto/user.dto';

import { UserCreatedDTO } from '../../dto/auth.dto';

@Injectable()
export class AuthPrismaRepository implements IAuthRepository {
  constructor(private prisma: PrismaService) {}

  async save(data: UserCreatedDTO): Promise<UserCreatedDTO> {
    return await this.prisma.users.create({
      data,
    });
  }
  async findByEmail(email: string): Promise<UserCreatedDTO> {
    return await this.prisma.users.findUnique({
      where: { id: email },
    });
  }
}
