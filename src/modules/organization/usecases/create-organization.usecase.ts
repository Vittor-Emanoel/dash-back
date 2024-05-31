import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrganizationDto } from '../dto/create-organization.dto';
import { IOrganizationRepository } from '../repositories/organization.repository';

@Injectable()
export class CreateOrganizationUseCase {
  constructor(
    private readonly organizationRepository: IOrganizationRepository,
  ) {}

  async execute(data: CreateOrganizationDto) {
    try {
      const organizationAlreadyExists =
        await this.organizationRepository.findByName(data.name);

      if (organizationAlreadyExists) {
        throw new NotFoundException('Organizacao ja criada!');
      }

      await this.organizationRepository.create(data);
    } catch (error) {
      throw new Error('Erro ao criar uma organizacao');
    }
  }
}
