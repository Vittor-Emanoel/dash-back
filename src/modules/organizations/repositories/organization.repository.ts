import { Organization } from '@/shared/entities/Organization';
import { OrganizationDto } from '../dto/organization.dto';
import { IOrganization } from '../types/organization';

export abstract class IOrganizationRepository {
  abstract create(
    data: OrganizationDto,
    owner_id: string,
  ): Promise<Organization>;
  abstract update(
    data: OrganizationDto,
    owner_id: string,
  ): Promise<Organization>;
  abstract get(owner_id: string): Promise<IOrganization[]>;
  abstract findBySlug(slug: string): Promise<Organization | null>;
  abstract delete(owner_id: string): Promise<Organization | null>;
  abstract findByOwner(owner_id: string): Promise<Organization | null>;
}
