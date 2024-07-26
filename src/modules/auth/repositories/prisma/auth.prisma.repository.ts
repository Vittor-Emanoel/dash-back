import { PrismaService } from '@/shared/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateOrganizationParams } from '../../dto/signup.dto';
import { Organization } from '../../entities/organization.entity';
import { IAuthRepository } from '../auth.repository';

@Injectable()
export class AuthPrismaRepository implements IAuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateOrganizationParams): Promise<Organization> {
    const { name, slug } = data;

    const organization = await this.prisma.organization.create({
      data: { name, slug },
    });

    return organization;
  }
}
