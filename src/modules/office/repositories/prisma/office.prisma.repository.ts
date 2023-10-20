import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { UpdateOfficeDto } from '../../dto/update-office.dto';
import { IOfficeRepository } from '../office-repository';

import { CreateOfficeDto } from '../../dto/create-office.dto';
import { Office } from '../../dto/office.dto';

@Injectable()
export class OfficeRepository implements IOfficeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Office[] | null> {
    const office = await this.prisma.office.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return office;
  }

  async create(data: CreateOfficeDto): Promise<Office> {
    const office = await this.prisma.office.create({
      data: {
        name: data.name,
      },
    });

    return office;
  }

  async update(id: string, data: UpdateOfficeDto): Promise<Office> {
    const { name } = data;

    const officeExist = await this.prisma.office.findUnique({
      where: { id },
    });

    if (!officeExist) {
      throw new NotFoundException('Office does not exist');
    }

    const office = await this.prisma.office.update({
      where: { id },
      data: {
        name,
      },
    });

    return office;
  }
  Injectable;
  async delete(id: string): Promise<Office> {
    const officeExist = await this.prisma.office.findUnique({
      where: { id },
    });

    if (!officeExist) {
      throw new NotFoundException('Office does not exist');
    }

    const office = await this.prisma.office.delete({
      where: { id },
    });

    return office;
  }

  async findUnique(id: string): Promise<Office | null> {
    const office = await this.prisma.office.findUnique({
      where: { id },
    });

    return office;
  }
}
