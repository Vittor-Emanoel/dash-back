import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ChurchsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ChurchsCreateArgs) {
    return this.prismaService.churchs.create(createDto);
  }

  findAll(findAllDto: Prisma.ChurchsFindManyArgs) {
    return this.prismaService.churchs.findMany(findAllDto);
  }

  findUnique(findUniqueDto: Prisma.ChurchsFindUniqueArgs) {
    return this.prismaService.churchs.findUnique(findUniqueDto);
  }
  findFirst(findFirstDto: Prisma.ChurchsFindFirstArgs) {
    return this.prismaService.churchs.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.ChurchsUpdateArgs) {
    return this.prismaService.churchs.update(updateDto);
  }

  delete(deleteDto: Prisma.ChurchsDeleteArgs) {
    return this.prismaService.churchs.delete(deleteDto);
  }
}
