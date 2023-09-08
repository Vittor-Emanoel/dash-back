import { AuthService } from './auth.service';
import { UsersRepository } from '../../shared/repositories/users.repositories';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../../shared/database/prisma.service';
import { JwtModule } from '@nestjs/jwt';

import { ConflictException } from '@nestjs/common';

import { JwtModuleOptions } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';

export const jwtConfig: JwtModuleOptions = {
  secret: '23233QEWQDASDAWD',
  signOptions: { expiresIn: '1h' },
};

describe('AuthService', () => {
  let authService: AuthService;
  let usersRepository: UsersRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, UsersRepository, PrismaService],
      imports: [JwtModule.register(jwtConfig)],
    }).compile();

    usersRepository = module.get<UsersRepository>(UsersRepository);
    authService = module.get<AuthService>(AuthService);
  });

  const user = {
    name: 'Admin',
    email: 'admin@admin.com',
    password: '12345678',
    role: 'ADMIN',
  };

  const signInDto = {
    email: user.email,
    password: user.password,
  };

  const signupDto = {
    name: 'Admin',
    email: user.email,
    password: 'short',
  };

  it('should authenticate a user with valid credentials', async () => {
    usersRepository.findUnique = jest.fn().mockResolvedValue(user);

    authService['comparePass'] = jest.fn().mockResolvedValue(true);

    const result = await authService.signIn(signInDto);

    expect(usersRepository.findUnique).toHaveBeenCalledWith({
      where: { email: signInDto.email },
    });

    expect(authService['comparePass']).toHaveBeenCalledWith(
      signInDto.password,
      user.password,
    );

    expect(result.accessToken).toBeDefined();
  });

  it('should throw UnauthorizedException for password and email invalid ', async () => {
    usersRepository.findUnique = jest.fn().mockResolvedValue(user);

    await expect(authService.signIn(signInDto)).rejects.toThrowError(
      UnauthorizedException,
    );
  });

  it('should throw ConflictException for existing email', async () => {
    await expect(authService.signup(signupDto)).rejects.toThrowError(
      ConflictException,
    );
  });
});
