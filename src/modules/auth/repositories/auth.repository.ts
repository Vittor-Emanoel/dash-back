import { CreateOrganizationParams } from '../dto/signup.dto';
import { Organization } from '../entities/organization.entity';

export abstract class IAuthRepository {
  abstract create(data: CreateOrganizationParams): Promise<Organization>;
}
