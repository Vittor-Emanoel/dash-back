import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { IOrganization } from 'src/shared/types/Organization';
import { CreateOrganizationDto } from '../../dto/create-organization.dto';
import { OrganizationCreated } from '../../dto/organization.dto';
import { IOrganizationRepository } from '../organization.repository';

interface IOutput {
  id: string;
  name: string;
  street: string;
  number: string;
  crn: string;
  own_id: string;
  createdAt: Date;
}

@Injectable()
export class OrganizationRepository implements IOrganizationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrganizationDto): Promise<CreateOrganizationDto> {
    const organization = await this.prisma.organization.create({
      data,
    });
    return organization;
  }

  async findAll(): Promise<OrganizationCreated[]> {
    return await this.prisma.organization.findMany({
      select: {
        id: true,
        name: true,
        street: true,
        number: true,
        crn: true,

        responsible: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        churchs: {
          select: {
            id: true,
            name: true,
            members: true,
          },
        },
      },
    });
  }

  async findByName(name: string): Promise<IOrganization | null> {
    const organization = await this.prisma.organization.findUnique({
      where: { name },
    });

    return organization;
  }
}
