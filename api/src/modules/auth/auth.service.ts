import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { UserRepository } from 'src/shared/repositories/users.respositories';
import { SignupDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';

import { compare, hash } from 'bcryptjs';
import { IPayload } from './entity/payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(signInDto: SignInDto) {
    const { email, password } = signInDto;

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

    const payload: IPayload = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const accessToken = await this.generateAccessToken(user.id, payload);

    return { accessToken };
  }
  async signup(signupDto: SignupDto) {
    const { name, email, password, role, avatar_url } = signupDto;

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
        avatar_url,
      },
    });

    const payload: IPayload = {
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const accessToken = await this.generateAccessToken(user.id, payload);

    return { accessToken };
  }
  private generateAccessToken(userId: string, payload: IPayload) {
    return this.jwtService.signAsync({ sub: userId, payload });
  }
}