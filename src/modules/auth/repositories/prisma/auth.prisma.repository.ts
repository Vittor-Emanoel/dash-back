import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { UserCreatedDTO } from '../../dto/account.dto';
import { SignupDto } from '../../dto/signup.dto';
import { IAuthRepository } from '../auth.repository';

@Injectable()
export class AuthPrismaRepository implements IAuthRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: SignupDto): Promise<UserCreatedDTO> {
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
