import { PrismaService } from '@/shared/database/prisma.service';
import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { IOrganizationsRepository } from './repositories/organizations.repository';
import { OrganizationsRepository } from './repositories/prisma/organizations.prisma.repository';

@Module({
  controllers: [OrganizationsController],
  providers: [
    OrganizationsService,
    PrismaService,
    {
      provide: IOrganizationsRepository,
      useClass: OrganizationsRepository,
    },
  ],
})
export class OrganizationsModule {}
