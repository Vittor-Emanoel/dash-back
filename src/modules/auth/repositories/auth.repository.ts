import { User } from '@/shared/entities/User';
import { CreateUserDto } from '../dto/signup.dto';

export abstract class IAuthRepository {
  abstract create(data: CreateUserDto): Promise<User>;
  abstract findByEmail(email: string): Promise<User | null>;
}
