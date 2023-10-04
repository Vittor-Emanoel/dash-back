import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'src/shared/config/env';
import { SigninUseCase } from './useCases/signin-usecase';
import { SignupUseCase } from './useCases/signup-usecase';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '7d' },
      secret: env.jwtSecret,
    }),
  ],
  controllers: [AuthController],
  providers: [SigninUseCase, SignupUseCase],
})
export class AuthModule {}
