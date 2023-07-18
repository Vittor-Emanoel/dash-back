import { Role } from 'src/shared/decorators/roles.decorators';

export type UserProfileDTO = {
  name: string;
  email: string;
  role: Role;
  avatarUrl: string;
};
