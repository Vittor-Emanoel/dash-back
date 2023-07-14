import { Injectable } from '@nestjs/common';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  signin({ email, password }: SigninDto) {
    return `email: ${email}, password: ${password} - user created`;
  }

  signup({ email, password }: SigninDto) {
    return `email: ${email}, password: ${password} - user is logged`;
  }
}
