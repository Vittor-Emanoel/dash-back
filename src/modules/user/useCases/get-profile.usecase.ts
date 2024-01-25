import { Injectable } from '@nestjs/common';

import { IUserRepository } from '../repositories/user.repository';

@Injectable()
export class GetProfileUseCase {
  constructor(private readonly repo: IUserRepository) {}

  async execute(adminId: string) {
    const admin = await this.repo.me(adminId);

    return admin;
  }
}
