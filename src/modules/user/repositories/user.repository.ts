import { AdminProfileDTO, UserUpdated } from '../dto/user.dto';

export abstract class IUserRepository {
  abstract findById(userId: string): Promise<UserUpdated | null>;
  abstract findAll(): Promise<UserUpdated[]>;
  abstract uploadAvatar(id: string, path: string): Promise<void>;
  abstract me(adminId: string): Promise<AdminProfileDTO>;
}
