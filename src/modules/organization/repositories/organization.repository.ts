import { IOrganization } from 'src/shared/types/Organization';
import { CreateOrganizationDto } from '../dto/create-organization.dto';
import { OrganizationCreated } from '../dto/organization.dto';

export abstract class IOrganizationRepository {
  abstract create(data: CreateOrganizationDto): Promise<CreateOrganizationDto>;
  abstract findAll(): Promise<OrganizationCreated[]>;
  abstract findByName(name: string): Promise<IOrganization | null>;
}
