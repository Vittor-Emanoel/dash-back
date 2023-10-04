import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateChurchDto } from './dto/create-church.dto';
import { UpdateChurchDto } from './dto/update-church.dto';
import { ChurchsRepository } from 'src/shared/repositories/churchs.repositories';
import { orderByType } from 'src/shared/model/orderBy.entity';

@Injectable()
export class ChurchsService {
  constructor(private readonly churchsRepo: ChurchsRepository) {}

  async create(createChurchDto: CreateChurchDto) {
    const { name, shepherd } = createChurchDto;

    const churchExists = await this.churchsRepo.findUnique({
      where: { id: name },
    });

    if (churchExists) {
      throw new ConflictException('This church already exists');
    }

    const church = await this.churchsRepo.create({
      data: {
        name,
        shepherd,
      },
    });

    return church;
  }

  async findAll(orderBy: orderByType) {
    const churchs = await this.churchsRepo.findAll({
      select: {
        id: true,
        name: true,
        shepherd: true,
      },
      orderBy: [
        {
          [orderBy.field]: orderBy.direction,
        },
      ],
    });

    return churchs;
  }

  async findOne(churchId: string) {
    const church = await this.churchsRepo.findUnique({
      where: { id: churchId },
    });

    if (!church) {
      throw new NotFoundException('Church does not exist');
    }

    return church;
  }

  async update(churchId: string, updateChurchDto: UpdateChurchDto) {
    const { name, shepherd } = updateChurchDto;

    const churchExists = await this.churchsRepo.findFirst({
      where: { id: churchId },
    });

    if (!churchExists) {
      throw new NotFoundException('Church does not exist');
    }

    const church = await this.churchsRepo.create({
      data: {
        name,
        shepherd,
      },
    });

    return church;
  }

  async remove(churchId: string) {
    const church = await this.churchsRepo.findAll({
      where: { id: churchId },
    });

    if (!church) {
      throw new NotFoundException('Church does not exist');
    }

    await this.churchsRepo.delete({
      where: { id: churchId },
    });
  }
}
