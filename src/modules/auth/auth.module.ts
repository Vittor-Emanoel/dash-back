import { PrismaService } from '@/shared/database/prisma.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthPrismaRepository } from './repositories/prisma/auth.prisma.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AuthPrismaRepository],
})
export class AuthModule {}
