import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';
import { UserRepository } from 'src/shared/repositories/users.respositories';
import { SignupDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';

import { compare, hash } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;

    const user = await this.userRepo.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken };
  }
  async signup(signupDto: SignupDto) {
    const { name, email, password, role } = signupDto;

    const emailTaken = await this.userRepo.findUnique({
      where: { email },
      select: { id: true },
    });

    if (emailTaken) {
      throw new ConflictException('This email is already in use');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.userRepo.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    const payload = {
      sub: user.id,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };

    const accessToken = await this.jwtService.signAsync(payload);

    return { accessToken };
  }

  // private generateAccessToken(payload: string) {
  //   return this.jwtService.signAsync(payload);
  // }
}
