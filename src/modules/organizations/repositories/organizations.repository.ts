import { Organization } from '@/shared/entities/Organization';
import { OrganizationDto } from '../dto/organizations.dto';
import { IOrganization } from '../types/IOrganization';

export abstract class IOrganizationsRepository {
  abstract create(
    data: OrganizationDto,
    owner_id: string,
  ): Promise<Organization>;
  abstract update(
    data: OrganizationDto,
    owner_id: string,
  ): Promise<Organization>;
  abstract stats(owner_id: string): Promise<IOrganization[]>;
  abstract get(owner_id: string): Promise<IOrganization[]>;
  abstract findBySlug(slug: string): Promise<Organization | null>;
  abstract delete(owner_id: string): Promise<Organization | null>;
  abstract findByOwner(owner_id: string): Promise<Organization | null>;
}
