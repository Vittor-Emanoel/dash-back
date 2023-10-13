import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import { ROLES_KEY, RoleType } from './roles.decorators';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { RolesGuard } from '../guards/role.guard';

export function Auth(...roles: RoleType[]) {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(AuthGuard, RolesGuard),
  );
}
