import { HttpException, HttpStatus } from '@nestjs/common';

export class AlreadyExistsError extends HttpException {
  constructor() {
    super('Already exists', HttpStatus.CONFLICT);
  }
}
