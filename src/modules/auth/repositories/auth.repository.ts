import { UserCreatedDTO } from '../dto/account.dto';
import { SignupDto } from '../dto/signup.dto';

export abstract class IAuthRepository {
  abstract create(data: SignupDto): Promise<UserCreatedDTO>;
  abstract findByEmail(email: string): Promise<UserCreatedDTO | null>;
}
