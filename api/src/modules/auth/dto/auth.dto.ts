import { Role } from 'src/shared/decorators/roles.decorators';
import { RolesGuard } from 'src/shared/guards/role.guard';

export type SignInDto = {
  email: string;
  password: string;
};

export type SignUpDto = {
  name: string;
  email: string;
  password: string;
};

export type UserCreatedDTO = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'FINANCE' | 'SECRETARY' | 'USER';
};
