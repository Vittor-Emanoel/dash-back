import { Injectable, NotFoundException } from '@nestjs/common';
import { IOfficeRepository } from '../repositories/office-repository';
import { CreateOfficeDto } from '../dto/create-office.dto';

@Injectable()
export class CreateOfficeUseCase {
  constructor(private readonly officesRepository: IOfficeRepository) {}

  async execute(data: CreateOfficeDto) {
    const officeExists = await this.officesRepository.findUnique(data.name);

    if (officeExists) {
      throw new NotFoundException('Office already exists');
    }

    const office = await this.officesRepository.create(data);

    return office;
  }
}
