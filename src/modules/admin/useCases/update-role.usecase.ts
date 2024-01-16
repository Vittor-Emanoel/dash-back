import { Injectable } from '@nestjs/common';

import { AdminUpdate } from '../dto';
import { IAdminsRepository } from '../repositories/user.repository';

@Injectable()
export class UploadRoleUseCase {
  constructor(private readonly repo: IAdminsRepository) {}

  async execute(adminId: string, role: AdminUpdate['role']) {
    const user = await this.repo.updateRole(adminId, role);

    return { user };
  }
}
