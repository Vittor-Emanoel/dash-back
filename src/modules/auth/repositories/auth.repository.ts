import { SignupDto } from '../dto/signup.dto';
import { UserCreatedDTO } from '../dto/user.dto';

export abstract class IAuthRepository {
  abstract create(data: SignupDto): Promise<UserCreatedDTO>;
  abstract findByEmail(email: string): Promise<UserCreatedDTO | null>;
}
