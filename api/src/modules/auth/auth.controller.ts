import { Body, Controller, Post } from '@nestjs/common';

import { IsPublic } from '../../shared/decorators/isPublic';
import { SignInDto } from './dto/signin.schema';
import { SignupDto } from './dto/signup.schema';
import { SigninUseCase } from './useCases/signin-usecase';
import { SignupUseCase } from './useCases/signup-usecase';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly signinUseCase: SigninUseCase,
    private readonly signupUseCase: SignupUseCase,
  ) {}

  @Post('signin')
  signin(@Body() signinDto: SignInDto) {
    return this.signinUseCase.execute(signinDto);
  }

  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.signupUseCase.execute(signupDto);
  }
}
