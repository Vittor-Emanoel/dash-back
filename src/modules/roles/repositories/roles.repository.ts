import { Role } from '@/shared/entities/Role';
import { RolesDto } from '../dto/roles.dto';

export abstract class IRolesRepository {
  abstract create(data: RolesDto): Promise<Role>;
  abstract update(data: RolesDto, role_id: string): Promise<Role>;
  abstract get(): Promise<Role[]>;
  abstract delete(role_id: string): Promise<Role | null>;
}
