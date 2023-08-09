import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class EventsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.EventsCreateArgs) {
    return this.prismaService.events.create(createDto);
  }

  findMany(findManyDto: Prisma.EventsFindManyArgs) {
    return this.prismaService.events.findMany(findManyDto);
  }
}
