import { Organization } from '@/shared/entities/Organization';
import { CreateOrganizationDto } from '../dto/organization.dto';

export abstract class IOrganizationRepository {
  abstract create(
    data: CreateOrganizationDto,
    owner_id: string,
  ): Promise<Organization>;
  abstract findBySlug(slug: string): Promise<Organization | null>;
  abstract findByOwner(owner_id: string): Promise<Organization | null>;
}
