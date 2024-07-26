import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/signup.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthPrismaRepository } from './repositories/prisma/auth.prisma.repository';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthPrismaRepository) {}

  async create(params: CreateUserDto) {
    return this.authRepository.create(params);
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
