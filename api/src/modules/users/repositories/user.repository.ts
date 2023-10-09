import { UserCreatedDTO, UserProfileDTO } from 'src/modules/auth/dto/auth.dto';
import { UpdateUserDto, Role } from '../dto/update.dto';
import { User } from 'src/shared/models/User';

export abstract class IUsersRepository {
  abstract findById(userId: string): Promise<UserCreatedDTO | null>;
  abstract uploadAvatar(id: string, path: string): Promise<void>;
  abstract updateRole(
    userId: string,
    role: Role,
  ): Promise<UpdateUserDto | null>;
  abstract me(userId: string): Promise<UserProfileDTO | null>;
}
