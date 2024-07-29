import { PrismaService } from '@/shared/database/prisma.service';
import { Module } from '@nestjs/common';
import { OrganizationsService } from '../organizations/organizations.service';
import { IOrganizationsRepository } from '../organizations/repositories/organizations.repository';
import { OrganizationsRepository } from '../organizations/repositories/prisma/organizations.prisma.repository';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { IMembersRepository } from './repositories/members.repository';
import { MembersRepository } from './repositories/prisma/members.prisma.repository';

@Module({
  controllers: [MembersController],
  providers: [
    MembersService,
    PrismaService,
    OrganizationsService,
    {
      provide: IMembersRepository,
      useClass: MembersRepository,
    },
    {
      provide: IOrganizationsRepository,
      useClass: OrganizationsRepository,
    },
  ],
})
export class MembersModule {}
