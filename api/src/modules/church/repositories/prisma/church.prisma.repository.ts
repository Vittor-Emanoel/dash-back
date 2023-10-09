import { Injectable } from '@nestjs/common';
import { IChurchRepository } from '../church.repository';
import { PrismaService } from 'src/shared/database/prisma.service';
import { Church } from 'src/shared/models/Church';
import { CreateChurchDto } from '../../dto/create-church.dto';
import { UpdateChurchDto } from '../../dto/update-church.dto';

@Injectable()
export class ChurchRepository implements IChurchRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateChurchDto): Promise<Church> {
    const church = await this.prisma.church.create({
      data,
      select: {
        id: true,
        name: true,
        shepherd: true,
      },
    });

    return church;
  }
  async findUnique(id: string): Promise<Church | null> {
    const church = await this.prisma.church.findUnique({
      where: { id },
    });

    return church;
  }

  async findAll() {
    return await this.prisma.church.findMany({
      select: {
        id: true,
        name: true,
        shepherd: true,
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
    });
    return church;
  }
  async delete(id: string): Promise<Church> {
    const church = await this.prisma.church.delete({
      where: { id },
    });
    return church;
  }
}
