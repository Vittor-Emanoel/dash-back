import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class MemberRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.MembersCreateArgs) {
    return this.prismaService.members.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.MembersFindUniqueArgs) {
    return this.prismaService.members.findUnique(findUniqueDto);
  }

  findMany(findManyDto: Prisma.MembersFindManyArgs) {
    return this.prismaService.members.findMany(findManyDto);
  }

  findFirst(findOneDto: Prisma.MembersFindFirstArgs) {
    return this.prismaService.members.findFirst(findOneDto);
  }
}
