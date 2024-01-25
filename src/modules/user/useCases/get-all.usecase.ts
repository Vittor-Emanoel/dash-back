import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../repositories/user.repository';

@Injectable()
export class GetAllUseCase {
  constructor(private readonly repo: IUserRepository) {}

  async execute() {
    const admins = await this.repo.findAll();

    return { admins };
  }
}
