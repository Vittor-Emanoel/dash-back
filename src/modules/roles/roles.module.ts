import { PrismaService } from '@/shared/database/prisma.service';
import { Module } from '@nestjs/common';
import { RolesRepository } from './repositories/prisma/roles.prisma.repository';
import { IRolesRepository } from './repositories/roles.repository';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  controllers: [RolesController],
  providers: [
    RolesService,
    PrismaService,
    {
      provide: IRolesRepository,
      useClass: RolesRepository,
    },
  ],
})
export class RolesModule {}
