import { PrismaService } from 'src/shared/database/prisma.service';
import { IOfficeRepository } from '../office-repository';
import { NotFoundException } from '@nestjs/common';
import { UpdateOfficeDto } from '../../dto/update-office.dto';

import { CreateOfficeDto } from '../../dto/create-office.dto';
import { Office } from 'src/shared/model/Office';

export class OfficeRepository implements IOfficeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Office[]> {
    return await this.prisma.offices.findMany({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async create(data: CreateOfficeDto): Promise<Office> {
    const office = await this.prisma.offices.create({
      data: {
        name: data.name,
      },
    });

    return office;
  }

  async update(id: string, data: UpdateOfficeDto): Promise<Office> {
    const { name } = data;

    const officeExist = await this.prisma.offices.findUnique({
      where: { id },
    });

    if (!officeExist) {
      throw new NotFoundException('Office does not exist');
    }

    const office = await this.prisma.offices.update({
      where: { id },
      data: {
        name,
      },
    });

    return office;
  }

  async delete(id: string): Promise<Office> {
    const officeExist = await this.prisma.offices.findUnique({
      where: { id },
    });

    if (!officeExist) {
      throw new NotFoundException('Office does not exist');
    }

    const office = await this.prisma.offices.delete({
      where: { id },
    });

    return office;
  }

  async findUnique(id: string): Promise<Office | null> {
    const office = await this.prisma.offices.findUnique({
      where: { id },
    });

    return office;
  }
}
