import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { MemberRepository } from 'src/shared/repositories/members.respositories';
import { orderByType } from './entities/orderBy.entity';

@Injectable()
export class MembersService {
  constructor(private readonly membersRepo: MemberRepository) {}

  async create(createMemberDto: CreateMemberDto) {
    const { name, phone } = createMemberDto;

    const memberExist = await this.membersRepo.findUnique({
      where: { phone },
    });

    if (memberExist) {
      throw new ConflictException('This member already exists');
    }

    const member = await this.membersRepo.create({
      data: {
        name,
        phone,
      },
    });

    return member;
  }

  async findAll(orderBy: orderByType) {
    const members = await this.membersRepo.findMany({
      orderBy: [
        {
          name: orderBy,
        },
      ],
    });

    return members;
  }

  async findOne(memberId: string) {
    const member = await this.membersRepo.findFirst({
      where: { id: memberId },
    });

    if (!member) {
      throw new NotFoundException('This user not exist');
    }

    return member;
  }

  // update(id: number, updateMemberDto: UpdateMemberDto) {
  //   return `This action updates a #${id} member`;
  // }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
