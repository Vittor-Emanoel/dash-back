import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/database/prisma.service';

@Injectable()
export class EventsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.EventsCreateArgs) {
    return this.prismaService.events.create(createDto);
  }

  findAll(findAllDto: Prisma.EventsFindManyArgs) {
    return this.prismaService.events.findMany(findAllDto);
  }

  findUnique(findUniqueDto: Prisma.EventsFindUniqueArgs) {
    return this.prismaService.events.findUnique(findUniqueDto);
  }
  findFirst(findFirstDto: Prisma.EventsFindFirstArgs) {
    return this.prismaService.events.findFirst(findFirstDto);
  }

  update(updateDto: Prisma.EventsUpdateArgs) {
    return this.prismaService.events.update(updateDto);
  }

  delete(deleteDto: Prisma.EventsDeleteArgs) {
    return this.prismaService.events.delete(deleteDto);
  }
}
