import { Injectable } from '@nestjs/common';
import { CreateChurchDto } from './dto/create-church.dto';
import { UpdateChurchDto } from './dto/update-church.dto';
import { ChurchsRepository } from 'src/shared/repositories/churchs.repositories';

@Injectable()
export class ChurchsService {
  constructor(private readonly churchsRepo: ChurchsRepository) {}

  async create(createChurchDto: CreateChurchDto) {
    const { name, shepherd } = createChurchDto;

    const church = await this.churchsRepo.create({
      data: {
        name,
        shepherd,
      },
    });

    return church;
  }
  async findAll() {
    const church = await this.churchsRepo.findAll({
      select: {
        id: true,
        name: true,
        shepherd: true,
        Members: {
          select: {
            id: true,
            name: true,
            phone: true,
          },
        },
      },
    });

    return church;
  }

  findOne(id: number) {
    return `This action returns a #${id} church`;
  }

  update(id: number, updateChurchDto: UpdateChurchDto) {
    return `This action updates a #${id} church`;
  }

  remove(id: number) {
    return `This action removes a #${id} church`;
  }
}
