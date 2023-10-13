import { Injectable } from '@nestjs/common';
import { IOfficeRepository } from '../repositories/office-repository';

@Injectable()
export class GetOfficeUseCase {
  constructor(private readonly officeRepository: IOfficeRepository) {}

  async execute() {
    return await this.officeRepository.findAll();
  }
}
