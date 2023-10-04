import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.UsersCreateArgs) {
    return this.prismaService.users.create(createDto);
  }

  findAll(findAllDto: Prisma.UsersFindManyArgs) {
    return this.prismaService.users.findMany(findAllDto);
  }

  findUnique(findUniqueDto: Prisma.UsersFindUniqueArgs) {
    return this.prismaService.users.findUnique(findUniqueDto);
  }

  update(updateDto: Prisma.UsersUpdateArgs) {
    return this.prismaService.users.update(updateDto);
  }

  delete(deleteDto: Prisma.UsersUpdateArgs) {
    return this.prismaService.users.update(deleteDto);
  }
}
