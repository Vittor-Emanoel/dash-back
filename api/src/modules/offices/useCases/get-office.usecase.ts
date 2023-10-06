import { Injectable } from '@nestjs/common';
import { IOfficeRepository } from '../repositories/office-repository';

@Injectable()
export class GetOfficeUseCase {
  constructor(private readonly officesRepository: IOfficeRepository) {}

  async execute() {
    return this.officesRepository.findAll();
  }
}
