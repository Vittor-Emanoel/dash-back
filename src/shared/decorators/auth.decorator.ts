import { SetMetadata, UseGuards, applyDecorators } from '@nestjs/common';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { RolesGuard } from '../guards/role.guard';
import { ROLES_KEY, Role } from './roles.decorator';

export function Auth(...roles: Role[]) {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(AuthGuard, RolesGuard),
  );
}
