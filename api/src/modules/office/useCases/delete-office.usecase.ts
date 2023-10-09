import { Injectable, NotFoundException } from '@nestjs/common';
import { IOfficeRepository } from '../repositories/office-repository';

@Injectable()
export class DeleteOfficeUseCase {
  constructor(private readonly officesRepository: IOfficeRepository) {}

  async execute(id: string) {
    const officeExist = await this.officesRepository.findUnique(id);

    if (!officeExist) {
      throw new NotFoundException('Office does not exist');
    }

    const office = await this.officesRepository.delete(id);

    return office;
  }
}
