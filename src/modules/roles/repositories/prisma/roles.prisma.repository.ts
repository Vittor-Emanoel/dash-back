import { PrismaService } from '@/shared/database/prisma.service';
import { Role } from '@/shared/entities/Role';
import { Injectable } from '@nestjs/common';
import { RolesDto } from '../../dto/roles.dto';
import { IRolesRepository } from '../roles.repository';

@Injectable()
export class RolesRepository implements IRolesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create({ name }: RolesDto): Promise<Role> {
    const role = await this.prisma.role.create({
      data: {
        name,
      },
    });

    return role;
  }

  async get(): Promise<Role[]> {
    const role = await this.prisma.role.findMany();

    return role;
  }

  async findById(role_id: string): Promise<Role | null> {
    const role = await this.prisma.role.findUnique({
      where: { id: role_id },
    });

    return role;
  }

  async update({ name }: RolesDto, role_id: string): Promise<Role> {
    const roles = await this.prisma.role.update({
      where: {
        id: role_id,
      },
      data: {
        name,
      },
    });
    return roles;
  }

  async delete(role_id: string): Promise<Role | null> {
    const role = await this.prisma.organization.delete({
      where: {
        id: role_id,
      },
    });

    return role;
  }
}
