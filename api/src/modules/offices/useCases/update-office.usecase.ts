import { NotFoundException } from '@nestjs/common';
import { IOfficeRepository } from '../repositories/office-repository';
import { UpdateOfficeDto } from '../dto/update-office.dto';

export class UpdateOfficeUseCase {
  constructor(private readonly officesRepository: IOfficeRepository) {}

  async execute(id: string, data: UpdateOfficeDto) {
    const officeExists = await this.officesRepository.findUnique(id);

    if (officeExists) {
      throw new NotFoundException('Office already exists');
    }

    const office = await this.officesRepository.update(id, data);

    return office;
  }
}
