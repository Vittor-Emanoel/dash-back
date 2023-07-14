import { ConflictException, Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { MemberRepository } from 'src/shared/repositories/members.respositories';

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

  findAll() {
    return `This action returns all members`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
