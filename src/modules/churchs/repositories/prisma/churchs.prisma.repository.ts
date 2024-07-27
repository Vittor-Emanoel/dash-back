import { PrismaService } from '@/shared/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Church } from '@prisma/client';
import { ChurchDto } from '../../dto/churchs.dto';
import { IChurch } from '../../types/IChurchs';
import { IChurchsRepository } from '../churchs.repository';

@Injectable()
export class ChurchsRepository implements IChurchsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    { name, description }: ChurchDto,
    organization_Id: string,
    owner_id: string,
  ): Promise<Church> {
    const church = await this.prisma.church.create({
      data: {
        name,
        description,
        owner_id,
        organization_Id,
      },
    });

    return church;
  }

  async get(): Promise<IChurch[]> {
    const church = await this.prisma.church.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        address: {
          select: {
            id: true,
            street: true,
            houseNumber: true,
            postalCode: true,
          },
        },
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        members: true,
      },
    });

    return church;
  }

  async findByName(church_name: string): Promise<Church | null> {
    const church = await this.prisma.church.findUnique({
      where: { name: church_name },
    });

    return church;
  }
}
