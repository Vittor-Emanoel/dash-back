import { SetMetadata } from '@nestjs/common';

export enum Role {
  ADMIN = 'ADMIN',
  SECRETARY = 'SECRETARY',
  FINANCE = 'FINANCE',
  USER = 'USER',
  SHEPHERD = 'SHEPHERD',
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
