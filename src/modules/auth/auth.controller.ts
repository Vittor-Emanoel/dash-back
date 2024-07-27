import { IsPublic } from '@/shared/decorators/is-public.decorator';
import { ZodPipe } from '@/shared/pipes/ZodPipe';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/signin.dto';
import { CreateUserDto, createUser } from './dto/signup.dto';

//rotas publicas => sem autenticacao
@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UsePipes(new ZodPipe(createUser))
  signup(@Body() createUser: CreateUserDto) {
    return this.authService.signup(createUser);
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signin(@Body() loginUser: LoginUserDto) {
    return this.authService.signin(loginUser);
  }
}
