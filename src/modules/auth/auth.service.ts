import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { LoginUserDto } from './dto/signin.dto';
import { CreateUserDto } from './dto/signup.dto';
import { AuthPrismaRepository } from './repositories/prisma/auth.prisma.repository';

interface IPayload {
  sub: string;
  name: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthPrismaRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signup({ name, email, password }: CreateUserDto) {
    try {
      const userExists = await this.authRepository.findByEmail(email);

      if (userExists) {
        throw new ConflictException('User already exists');
      }

      const passwordHashed = await hash(password, 12);

      const user = await this.authRepository.create({
        name,
        email,
        password: passwordHashed,
      });

      const payload: IPayload = {
        sub: user.id,
        name: user.name,
        email: user.email,
      };

      const accessToken = await this.generateAccessToken(payload);

      return { accessToken };
    } catch (error) {
      //TODO: Usar um servico de log
      console.error(error);
      throw new Error(error);
    }
  }

  async signin({ email, password }: LoginUserDto) {
    try {
      const user = await this.authRepository.findByEmail(email);

      if (!user) {
        throw new NotFoundException('User is not exists');
      }

      const isPasswordValid = await this.comparePass(password, user.password);

      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const payload: IPayload = {
        sub: user.id,
        name: user.name,
        email: user.email,
      };

      const accessToken = await this.generateAccessToken(payload);

      return { accessToken };
    } catch (error) {
      //TODO: Usar um servico de log
      console.error(error);
      throw new Error(error);
    }
  }

  async comparePass(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return compare(password, hashedPassword);
  }
  private generateAccessToken(payload: IPayload) {
    return this.jwtService.signAsync(payload);
  }
}
