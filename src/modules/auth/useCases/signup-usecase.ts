import { ConflictException, Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcryptjs';
import { SignupDto } from '../dto/signup.schema';
import { IAuthRepository } from '../repositories/auth.repository';

@Injectable()
export class SignupUseCase {
  constructor(
    private readonly authRepository: IAuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(data: SignupDto) {
    const { name, email, password } = data;

    const emailTaken = await this.authRepository.findByEmail(email);

    if (emailTaken) {
      throw new ConflictException('This email is already in use');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.authRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    const payload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const accessToken = await this.generateAccessToken(payload);

    return { accessToken };
  }

  private generateAccessToken(payload) {
    return this.jwtService.signAsync(payload);
  }
}
