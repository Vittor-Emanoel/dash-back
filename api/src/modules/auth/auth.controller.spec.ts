import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            signIn: jest.fn(),
            signup: jest.fn(),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
    expect(authService).toBeDefined();
  });

  describe('signin', () => {
    it('should call authService.SignIn and return the result', async () => {
      const signInDto = {
        email: 'teste@teste.com',
        password: '121212121',
      };
      const signInResult = {
        accessToken: 'dkajnsdjqnwjnejnad',
      };

      jest.spyOn(authService, 'signIn').mockResolvedValue(signInResult);

      const result = await authController.signin(signInDto);

      expect(authService.signIn).toHaveBeenCalledWith(signInDto);
      expect(result).toBe(signInResult);
    });
  });

  describe('signup', () => {
    it('should call authService.Signup and return the result', async () => {
      const signupDto = {
        name: 'teste',
        email: 'teste@teste.com',
        password: '121212121',
      };
      const signupResult = {
        accessToken: 'dkajnsdjqnwjnejnad',
      };

      jest.spyOn(authService, 'signup').mockResolvedValue(signupResult);

      const result = await authController.signup(signupDto);

      expect(authService.signup).toHaveBeenCalledWith(signupDto);
      expect(result).toBe(signupResult);
    });
  });
});
