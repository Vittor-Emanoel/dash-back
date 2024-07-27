import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OrganizationDto } from './dto/organizations.dto';
import { IOrganizationsRepository } from './repositories/organizations.repository';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly organizationRepository: IOrganizationsRepository,
  ) {}

  //TODO: A REGRA DE NEGOCIO E QUE CADA USUARIO DO PODE SER UMA ORGANIZACAO ATRIBUIDA A ELE
  async create({ name, slug }: OrganizationDto, owner_id: string) {
    const organizationExists = await this.organizationRepository.findBySlug(
      slug,
    );

    if (organizationExists) {
      throw new ConflictException('Slug in used');
    }

    const userOwnerOfOrganization =
      await this.organizationRepository.findByOwner(owner_id);

    if (userOwnerOfOrganization) {
      throw new ConflictException(
        'There is already an organization assigned to you',
      );
    }

    await this.organizationRepository.create({ name, slug }, owner_id);
  }

  async get(owner_id: string) {
    const organization = await this.organizationRepository.get(owner_id);

    if (!organization) {
      throw new NotFoundException(
        'Is not already an organization assigned to you',
      );
    }

    return organization;
  }

  async update({ name, slug }: OrganizationDto, owner_id: string) {
    const organizationExists = await this.organizationRepository.findBySlug(
      slug,
    );

    if (organizationExists) {
      throw new ConflictException('Slug in used');
    }

    const userOwnerOfOrganization =
      await this.organizationRepository.findByOwner(owner_id);

    if (userOwnerOfOrganization) {
      throw new ConflictException(
        'There is already an organization assigned to you',
      );
    }

    await this.organizationRepository.update({ name, slug }, owner_id);
  }

  async delete(owner_id: string) {
    const organization = await this.organizationRepository.findByOwner(
      owner_id,
    );

    if (!organization) {
      throw new NotFoundException(
        'Is not already an organization assigned to you',
      );
    }

    await this.organizationRepository.delete(owner_id);
  }
}
