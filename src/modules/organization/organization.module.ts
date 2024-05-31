import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { OrganizationController } from './organization.controller';
import { IOrganizationRepository } from './repositories/organization.repository';
import { OrganizationRepository } from './repositories/prisma/organization.prisma.repository';
import { CreateOrganizationUseCase } from './usecases/create-organization.usecase';
import { GetOrganizationUseCase } from './usecases/get-organization.usecase';

@Module({
  controllers: [OrganizationController],
  providers: [
    PrismaService,
    CreateOrganizationUseCase,
    GetOrganizationUseCase,
    {
      provide: IOrganizationRepository,
      useClass: OrganizationRepository,
    },
  ],
})
export class OrganizationModule {}
