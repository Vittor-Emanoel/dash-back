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
    const {
      fullName,
      phone,
      churchId,
      street,
      houseNumber,
      postalCode,
      officesId,
    } = createMemberDto;

    const memberExist = await this.membersRepo.findUnique({
      where: { phone },
    });

    await this.validateChurch.validate(churchId);

    if (memberExist) {
      throw new ConflictException('This member already exists');
    }

    const member = await this.membersRepo.create({
      data: {
        fullName,
        phone,
        churchId,
        street,
        houseNumber,
        postalCode,
        officesId,
      },
    });

    return member;
  }

  async findAll(orderBy: orderByType) {
    const members = await this.membersRepo.findAll({
      select: {
        id: true,
        fullName: true,
        phone: true,
        street: true,
        houseNumber: true,
        postalCode: true,
        church: {
          select: {
            name: true,
            shepherd: true,
          },
        },
        office: {
          select: {
            name: true,
          },
        },
        Attendance: {
          select: {
            event: true,
            attendanceStatus: true,
          },
        },
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
    const { fullName, phone, churchId, street, postalCode } = updateMemberDto;

    const memberById = await this.membersRepo.findFirst({
      where: { id: memberId },
    });

    await this.validateChurch.validate(churchId);

    if (!memberById) {
      throw new NotFoundException('This is user not exists');
    }

    const member = await this.membersRepo.update({
      where: { id: memberId },
      data: {
        fullName,
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
      throw new NotFoundException('This is user not exists');
    }

    await this.membersRepo.delete({
      where: { id: memberId },
    });

    return;
  }
}
