import { UserCreatedDTO } from '../dto/auth.dto';
import { SignupDto } from '../dto/signup.schema';

export abstract class IAuthRepository {
  abstract create(data: SignupDto): Promise<UserCreatedDTO>;
  abstract findByEmail(email: string): Promise<UserCreatedDTO | null>;
}
