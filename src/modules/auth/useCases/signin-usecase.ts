import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { SignInDto } from '../dto/signin.dto';
import { IAuthRepository } from '../repositories/auth.repository';

@Injectable()
export class SigninUseCase {
  constructor(
    private readonly authRepository: IAuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(data: SignInDto) {
    const { email, password } = data;

    const user = await this.authRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.comparePass(password, user.password);

    console.log(isPasswordValid);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const accessToken = await this.generateAccessToken(payload);

    return { accessToken };
  }
  async comparePass(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return compare(password, hashedPassword);
  }

  private generateAccessToken(payload) {
    return this.jwtService.signAsync(payload);
  }
}
