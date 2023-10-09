import { Injectable, NotFoundException } from '@nestjs/common';
import { IMembersRepository } from '../repositories/members.repository';
import { CreateMemberDto } from '../dto/create-member.dto';

@Injectable()
export class CreateMemberUseCase {
  constructor(private readonly membersRepository: IMembersRepository) {}

  async execute(data: CreateMemberDto) {
    const member = await this.membersRepository.findUnique(data.phone);

    if (member) {
      throw new NotFoundException('Member already exists');
    }

    return await this.membersRepository.create(data);
  }
}
