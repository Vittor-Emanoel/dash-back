import { Injectable } from '@nestjs/common';
import { IOrganizationRepository } from '../repositories/organization.repository';

@Injectable()
export class GetOrganizationUseCase {
  constructor(
    private readonly organizationRepository: IOrganizationRepository,
  ) {}

  async execute() {
    try {
      return await this.organizationRepository.findAll();
    } catch (error) {
      throw new Error('Erro ao listar todas as organizacoes');
    }
  }
}
