import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class ChurchsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ChurchsCreateArgs) {
    return this.prismaService.churchs.create(createDto);
  }

  findUnique(findUniqueDto: Prisma.ChurchsFindUniqueArgs) {
    return this.prismaService.churchs.findUnique(findUniqueDto);
  }

  update(updateDto: Prisma.ChurchsUpdateArgs) {
    return this.prismaService.churchs.update(updateDto);
  }

  findAll(findManyDto: Prisma.ChurchsFindManyArgs) {
    return this.prismaService.churchs.findMany(findManyDto);
  }
}
