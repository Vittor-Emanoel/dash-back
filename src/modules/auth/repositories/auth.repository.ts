import { UserCreated } from '../dto/auth.dto';
import { SignupDto } from '../dto/signup.dto';

export abstract class IAuthRepository {
  abstract create(data: SignupDto): Promise<UserCreated>;
  abstract findByEmail(email: string): Promise<UserCreated | null>;
}
