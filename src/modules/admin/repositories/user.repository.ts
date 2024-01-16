import { UserCreatedDTO, UserProfileDTO } from 'src/modules/auth/dto/auth.dto';
import { AdminUpdate } from '../dto';

export abstract class IAdminsRepository {
  abstract findById(userId: string): Promise<UserCreatedDTO>;
  abstract findAll(): Promise<UserCreatedDTO[]>;
  abstract uploadAvatar(id: string, path: string): Promise<void>;
  abstract updateRole(
    userId: string,
    role: AdminUpdate['role'],
  ): Promise<AdminUpdate>;
  abstract me(userId: string): Promise<UserProfileDTO>;
}
