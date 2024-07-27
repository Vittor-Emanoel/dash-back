import { PrismaService } from '@/shared/database/prisma.service';
import { Module } from '@nestjs/common';
import { IOrganizationsRepository } from '../organizations/repositories/organizations.repository';
import { OrganizationsRepository } from '../organizations/repositories/prisma/organizations.prisma.repository';
import { ChurchsController } from './churchs.controller';
import { ChurchsService } from './churchs.service';
import { IChurchsRepository } from './repositories/churchs.repository';
import { ChurchsRepository } from './repositories/prisma/churchs.prisma.repository';

@Module({
  controllers: [ChurchsController],
  providers: [
    ChurchsService,
    PrismaService,
    {
      provide: IChurchsRepository,
      useClass: ChurchsRepository,
    },
    {
      provide: IOrganizationsRepository,
      useClass: OrganizationsRepository,
    },
  ],
})
export class ChurchsModule {}
