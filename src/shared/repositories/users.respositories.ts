import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.UsersCreateArgs) {
    return this.prismaService.users.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.UsersFindUniqueArgs) {
    return this.prismaService.users.findUnique(findUniqueDto);
  }
}
