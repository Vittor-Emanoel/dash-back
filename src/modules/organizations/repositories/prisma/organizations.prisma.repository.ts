import { PrismaService } from '@/shared/database/prisma.service';
import { Organization } from '@/shared/entities/Organization';
import { Injectable } from '@nestjs/common';
import { OrganizationDto } from '../../dto/organizations.dto';
import { IOrganization } from '../../types/IOrganization';
import { IOrganizationsRepository } from '../organizations.repository';

@Injectable()
export class OrganizationsRepository implements IOrganizationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: OrganizationDto, owner_id: string): Promise<Organization> {
    const { name, slug } = data;

    const organization = await this.prisma.organization.create({
      data: {
        name,
        slug,
        owner_id,
      },
    });

    return organization;
  }

  async get(owner_id: string): Promise<IOrganization[]> {
    const organization = await this.prisma.organization.findMany({
      where: { owner_id },
      select: {
        id: true,
        name: true,
        slug: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return organization;
  }

  async findBySlug(slug: string): Promise<Organization | null> {
    const organization = await this.prisma.organization.findUnique({
      where: { slug },
    });

    return organization;
  }

  async findByOwner(owner_id: string): Promise<Organization | null> {
    const organization = await this.prisma.organization.findUnique({
      where: {
        owner_id,
      },
    });

    return organization;
  }

  async update(data: OrganizationDto, owner_id: string): Promise<Organization> {
    const { name, slug } = data;
    const organization = await this.prisma.organization.update({
      where: {
        owner_id,
      },
      data: {
        name,
        slug,
      },
    });
    return organization;
  }
  async delete(owner_id: string): Promise<Organization | null> {
    const organization = await this.prisma.organization.delete({
      where: {
        owner_id,
      },
    });

    return organization;
  }
}
