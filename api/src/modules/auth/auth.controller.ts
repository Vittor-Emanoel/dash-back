import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { IsPublic } from '../../shared/decorators/IsPublic';
import { SignInDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() signinDto: SignInDto) {
    return this.authService.signIn(signinDto);
  }

  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
