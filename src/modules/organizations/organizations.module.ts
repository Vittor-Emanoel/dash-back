import { PrismaService } from '@/shared/database/prisma.service';
import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { IOrganizationRepository } from './repositories/organization.repository';
import { OrganizationRepository } from './repositories/prisma/organization.prisma.repository';

@Module({
  controllers: [OrganizationsController],
  providers: [
    OrganizationsService,
    PrismaService,
    {
      provide: IOrganizationRepository,
      useClass: OrganizationRepository,
    },
  ],
})
export class OrganizationsModule {}
