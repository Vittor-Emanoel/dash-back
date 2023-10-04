import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';

@Injectable()
export class MembersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.MembersCreateArgs) {
    return this.prismaService.members.create(createDto);
  }

  findAll(findAllDto: Prisma.MembersFindManyArgs) {
    return this.prismaService.members.findMany(findAllDto);
  }

  findUnique(findUniqueDto: Prisma.MembersFindUniqueArgs) {
    return this.prismaService.members.findUnique(findUniqueDto);
  }
  findFirst(findFirstDto: Prisma.MembersFindFirstArgs) {
    return this.prismaService.members.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.MembersUpdateArgs) {
    return this.prismaService.members.update(updateDto);
  }

  delete(deleteDto: Prisma.MembersDeleteArgs) {
    return this.prismaService.members.delete(deleteDto);
  }
}
