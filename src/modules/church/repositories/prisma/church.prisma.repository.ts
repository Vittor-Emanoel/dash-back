import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { IChurchRepository } from '../church.repository';

import { Church } from '../../dto/church.dto';
import { CreateChurchDto } from '../../dto/create-church.dto';
import { UpdateChurchDto } from '../../dto/update-church.dto';

@Injectable()
export class ChurchRepository implements IChurchRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateChurchDto): Promise<Church> {
    const church = await this.prisma.church.create({
      data,
      select: {
        name: true,
        shepherd_id: true,
      },
    });

    return church;
  }
  async findUnique(id: string): Promise<Church | null> {
    return await this.prisma.church.findUnique({
      where: { id },
      include: {
        members: true,
      },
    });
  }

  async findAll(): Promise<Church[]> {
    return await this.prisma.church.findMany({
      select: {
        id: true,
        name: true,
        shepherd_id: true,
        members: true,
      },
      orderBy: [
        {
          name: 'asc',
        },
      ],
    });
  }

  async update(id: string, data: UpdateChurchDto): Promise<Church> {
    const church = await this.prisma.church.update({
      data,
      where: { id },
      include: {
        members: true,
      },
    });
    return church;
  }
  async delete(id: string): Promise<Church> {
    return await this.prisma.church.delete({
      where: { id },
      include: {
        members: true,
      },
    });
  }
}
