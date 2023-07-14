import {
  ArgumentMetadata,
  PipeTransform,
  HttpException,
  Injectable,
  HttpStatus,
} from '@nestjs/common';

import { SignupDto } from 'src/modules/auth/dto/signup.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  async transform(
    { name, email, password }: SignupDto,
    metadata: ArgumentMetadata,
  ) {
    if (!name || !email || !password) {
      throw new HttpException(
        `[name, email, password] is required`,
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return {
      name,
      email,
      password,
    };
  }
}
