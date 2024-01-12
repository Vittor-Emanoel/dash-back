import { Injectable } from '@nestjs/common';

import { IUsersRepository } from '../repositories/user.repository';

@Injectable()
export class GetAllUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute() {
    const user = await this.usersRepository.findAll();

    return { user };
  }
}
