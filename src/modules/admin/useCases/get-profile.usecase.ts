import { Injectable } from '@nestjs/common';

import { IAdminsRepository } from '../repositories/user.repository';

@Injectable()
export class GetProfileUseCase {
  constructor(private readonly repo: IAdminsRepository) {}

  async execute(adminId: string) {
    const admin = await this.repo.me(adminId);

    return { admin };
  }
}
