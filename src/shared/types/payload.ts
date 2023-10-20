import { Role } from '../decorators/roles.decorator';

export interface IUserPayload {
  id: string;
  name: string;
  email: string;
  role: Role;
}
