import { Injectable } from '@nestjs/common';

@Injectable()
export class ForgotPasswordUseCase {
  async execute(userId: string) {
    return userId;
  }
}
