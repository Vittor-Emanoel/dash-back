import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMemberDto } from '../dto/create-member.dto';
import { MembersRepository } from 'src/shared/repositories/members.repositories';
import { orderByType } from '../../../shared/models/orderBy.entity';
import { UpdateMemberDto } from '../dto/update-member.dto';
import { ValidateChurchService } from './validate-church.service';

@Injectable()
export class MembersService {
  constructor(
    private readonly membersRepo: MembersRepository,
    private readonly validateChurch: ValidateChurchService,
  ) {}

  async create(createMemberDto: CreateMemberDto) {
    const { name, phone, churchId, street, state, city, postalCode } =
      createMemberDto;

    const memberExist = await this.membersRepo.findUnique({
      where: { phone },
    });

    await this.validateChurch.validate(churchId);

    if (memberExist) {
      throw new ConflictException('This member already exists');
    }

    const member = await this.membersRepo.create({
      data: {
        name,
        phone,
        churchId,
        street,
        state,
        city,
        postalCode,
      },
    });

    return member;
  }

  async findAll(orderBy: orderByType) {
    const members = await this.membersRepo.findAll({
      select: {
        id: true,
        name: true,
        phone: true,
        street: true,
        postalCode: true,
        church: true,
      },
      orderBy: [
        {
          [orderBy.field]: orderBy.direction,
        },
      ],
    });

    return members;
  }

  async findById(memberId: string) {
    const member = await this.membersRepo.findFirst({
      where: { id: memberId },
    });

    if (!member) {
      throw new NotFoundException('This is user not exists');
    }

    return member;
  }

  async update(memberId: string, updateMemberDto: UpdateMemberDto) {
    const { name, phone, churchId, street, postalCode } = updateMemberDto;

    const memberById = await this.membersRepo.findFirst({
      where: { id: memberId },
    });

    await this.validateChurch.validate(churchId);

    if (!memberById) {
      throw new NotFoundException('This user not exist');
    }

    const member = await this.membersRepo.update({
      where: { id: memberId },
      data: {
        name,
        phone,
        churchId,
        street,
        postalCode,
      },
    });

    return member;
  }

  async remove(memberId: string) {
    const memberExist = await this.membersRepo.findFirst({
      where: { id: memberId },
    });

    if (!memberExist) {
      throw new NotFoundException('This user not exist');
    }

    await this.membersRepo.delete({
      where: { id: memberId },
    });

    return;
  }
}
