import { ConflictException, Injectable } from '@nestjs/common';
import { SignUpDto } from '../dto/auth.dto';
import { IAuthRepository } from '../repositories/auth.repository';
import { hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SignupUseCase {
  constructor(
    private readonly authRepository: IAuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(data: SignUpDto) {
    const { name, email, password } = data;

    const emailTaken = await this.authRepository.findByEmail(email);

    if (emailTaken) {
      throw new ConflictException('This email is already in use');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.authRepository.save({
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
