import { Injectable } from '@nestjs/common';

import { IAdminsRepository } from '../repositories/user.repository';

@Injectable()
export class GetAllUseCase {
  constructor(private readonly repo: IAdminsRepository) {}

  async execute() {
    const admins = await this.repo.findAll();

    return { admins };
  }
}
