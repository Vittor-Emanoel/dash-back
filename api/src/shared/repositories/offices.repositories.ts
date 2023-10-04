import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';

@Injectable()
export class OfficesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.OfficesCreateArgs) {
    return this.prismaService.offices.create(createDto);
  }

  findAll(findAllDto: Prisma.OfficesFindManyArgs) {
    return this.prismaService.offices.findMany(findAllDto);
  }

  findUnique(findUniqueDto: Prisma.OfficesFindUniqueArgs) {
    return this.prismaService.offices.findUnique(findUniqueDto);
  }
  findFirst(findFirstDto: Prisma.OfficesFindFirstArgs) {
    return this.prismaService.offices.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.OfficesUpdateArgs) {
    return this.prismaService.offices.update(updateDto);
  }

  delete(deleteDto: Prisma.OfficesDeleteArgs) {
    return this.prismaService.offices.delete(deleteDto);
  }
}
