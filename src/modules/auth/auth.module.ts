import { env } from '@/shared/config/env';
import { PrismaService } from '@/shared/database/prisma.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthPrismaRepository } from './repositories/prisma/auth.prisma.repository';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '7d' },
      secret: env.jwtSecret,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, AuthPrismaRepository],
})
export class AuthModule {}
