import { Injectable } from '@nestjs/common';
import { RolesDto } from './dto/roles.dto';
import { IRolesRepository } from './repositories/roles.repository';

@Injectable()
export class RolesService {
  constructor(private readonly rolesRepository: IRolesRepository) {}

  async create({ name }: RolesDto) {
    await this.rolesRepository.create({ name });
  }

  async get() {
    const roles = await this.rolesRepository.get();
    return roles;
  }

  async update({ name }: RolesDto, role_id: string) {
    await this.rolesRepository.update({ name }, role_id);
  }

  async delete(role_id: string) {
    await this.rolesRepository.delete(role_id);
  }
}
