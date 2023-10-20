import { Injectable } from '@nestjs/common';

import { UpdateUserDto } from '../dto/update.dto';
import { IUsersRepository } from '../repositories/user.repository';

@Injectable()
export class UploadRoleUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(userId: string, role: UpdateUserDto['role']) {
    const user = await this.usersRepository.updateRole(userId, role);

    return { user };
  }
}
