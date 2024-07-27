import { ConflictException, Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/organization.dto';
import { IOrganizationRepository } from './repositories/organization.repository';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly organizationRepository: IOrganizationRepository,
  ) {}

  //TODO: A REGRA DE NEGOCIO E QUE CADA USUARIO DO PODE SER UMA ORGANIZACAO ATRIBUIDA A ELE
  async create({ name, slug }: CreateOrganizationDto, owner_id: string) {
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
}
