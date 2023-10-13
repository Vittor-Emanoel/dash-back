import { Injectable } from '@nestjs/common';

import { IUsersRepository } from '../repositories/user.repository';
import { Role } from '../dto/update.dto';

@Injectable()
export class UploadRoleUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(userId: string, role: Role) {
    const user = await this.usersRepository.updateRole(userId, role);

    return { user };
  }
}
