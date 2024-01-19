import { AdminProfileDTO } from '../dto';
import { CreateAdminDTO } from '../dto/create-admin.dto';

export abstract class IAdminsRepository {
  abstract findById(userId: string): Promise<CreateAdminDTO | null>;
  abstract findAll(): Promise<CreateAdminDTO[]>;
  abstract uploadAvatar(id: string, path: string): Promise<void>;
  abstract me(adminId: string): Promise<AdminProfileDTO>;
}
