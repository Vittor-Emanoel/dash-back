import { Injectable } from '@nestjs/common';

import { IUsersRepository } from '../repositories/user.repository';

@Injectable()
export class GetProfileUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(userId: string) {
    const user = await this.usersRepository.me(userId);

    return { user };
  }
}
