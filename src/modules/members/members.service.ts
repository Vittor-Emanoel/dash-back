import { Injectable } from '@nestjs/common';
import { MemberDto } from './dto/member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { IMembersRepository } from './repositories/members.repository';

@Injectable()
export class MembersService {
  constructor(private readonly membersRepository: IMembersRepository) {}

  create(createMemberDto: MemberDto, church_id: string) {
    return this.membersRepository.create(createMemberDto, church_id);
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
