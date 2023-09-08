import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { OfficesRepository } from 'src/shared/repositories/offices.repositories';

@Injectable()
export class OfficesService {
  constructor(private readonly officesRepo: OfficesRepository) {}

  async create(createOfficeDto: CreateOfficeDto) {
    const { name } = createOfficeDto;

    const officeExists = await this.officesRepo.findUnique({
      where: { id: name },
    });

    if (officeExists) {
      throw new NotFoundException('Office already exists');
    }

    const office = await this.officesRepo.create({
      data: {
        name,
      },
    });

    return office;
  }

  async findAll() {
    return this.officesRepo.findAll({
      select: {
        id: true,
        name: true,
      },
    });
  }

  async findOne(officeId: string) {
    const officeExist = await this.officesRepo.findUnique({
      where: { id: officeId },
    });

    if (!officeExist) {
      throw new NotFoundException('Office does not exist');
    }

    const office = await this.officesRepo.findUnique({
      where: { id: officeId },
      select: {
        name: true,
      },
    });

    return office;
  }

  async update(officeId: string, updateOfficeDto: UpdateOfficeDto) {
    const { name } = updateOfficeDto;

    const officeExist = await this.officesRepo.findUnique({
      where: { id: officeId },
    });

    if (!officeExist) {
      throw new NotFoundException('Office does not exist');
    }

    const office = await this.officesRepo.update({
      where: { id: officeId },
      data: {
        name,
      },
    });

    return office;
  }

  async remove(officeId: string) {
    const officeExist = await this.officesRepo.findUnique({
      where: { id: officeId },
    });

    if (!officeExist) {
      throw new NotFoundException('Office does not exist');
    }

    const office = await this.officesRepo.delete({
      where: { id: officeId },
    });

    return office;
  }
}
