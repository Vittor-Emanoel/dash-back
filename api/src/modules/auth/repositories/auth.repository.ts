import { CreateUserDto } from 'src/modules/users/dto/user.dto';
import { UserCreatedDTO } from '../dto/auth.dto';

export abstract class IAuthRepository {
  public save(data: CreateUserDto): Promise<UserCreatedDTO>;
  public findByEmail(email: string): Promise<UserCreatedDTO>;
}
