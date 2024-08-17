import { PrismaService } from '@/shared/database/prisma.service';
import { Module } from '@nestjs/common';
import { UsersRepository } from './repositories/prisma/users.prisma.repository';
import { IUsersRepository } from './repositories/users.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService,    {
    provide: IUsersRepository,
    useClass: UsersRepository,
  },]
})
export class UsersModule {}
