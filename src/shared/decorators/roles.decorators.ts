import { SetMetadata } from '@nestjs/common';

export enum RoleType {
  ADMIN = 'ADMIN',
  SECRETARY = 'SECRETARY',
  FINANCE = 'FINANCE',
  USER = 'USER',
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RoleType[]) => SetMetadata(ROLES_KEY, roles);
