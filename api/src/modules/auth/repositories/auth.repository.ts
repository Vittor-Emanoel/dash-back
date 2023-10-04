import { CreateUserDto } from 'src/modules/users/dto/user.dto';
import { UserCreatedDTO } from '../dto/auth.dto';

export abstract class IAuthRepository {
  abstract save(data: CreateUserDto): Promise<UserCreatedDTO>;
  abstract findByEmail(email: string): Promise<UserCreatedDTO | null>;
}
