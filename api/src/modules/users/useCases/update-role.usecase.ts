import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update.dto';
import { IUsersRepository } from '../repositories/user.repository';
import { Role } from 'src/shared/decorators/roles.decorators';

@Injectable()
export class UploadRoleUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(userId: string, role: UpdateUserDto) {
    const user = await this.usersRepository.updateRole(userId, role);

    return { user };
  }
}
