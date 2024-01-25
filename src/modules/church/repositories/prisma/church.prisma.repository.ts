import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { IChurchRepository } from '../church.repository';

import { ChurchCreated } from '../../dto/church.dto';
import { CreateChurchDto } from '../../dto/create-church.dto';
import { UpdateChurchDto } from '../../dto/update-church.dto';

@Injectable()
export class ChurchRepository implements IChurchRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateChurchDto): Promise<ChurchCreated> {
    const church = await this.prisma.church.create({
      data,
      select: {
        name: true,
        userId: true,
      },
    });

    return church;
  }
  async findUnique(id: string): Promise<ChurchCreated | null> {
    return await this.prisma.church.findUnique({
      where: { id },
      include: {
        members: true,
      },
    });
  }

  async findAll(): Promise<ChurchCreated[]> {
    return await this.prisma.church.findMany({
      select: {
        id: true,
        name: true,
        members: true,
        userId: true,
      },
      orderBy: [
        {
          name: 'asc',
        },
      ],
    });
  }

  async update(id: string, data: UpdateChurchDto): Promise<ChurchCreated> {
    const church = await this.prisma.church.update({
      data,
      where: { id },
      include: {
        members: true,
      },
    });
    return church;
  }
  async delete(id: string): Promise<ChurchCreated> {
    return await this.prisma.church.delete({
      where: { id },
      include: {
        members: true,
      },
    });
  }
}
