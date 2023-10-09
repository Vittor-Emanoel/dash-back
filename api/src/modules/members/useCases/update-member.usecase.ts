import { Injectable, NotFoundException } from '@nestjs/common';
import { IMembersRepository } from '../repositories/members.repository';
import { UpdateMemberDto } from '../dto/update-member.dto';

@Injectable()
export class UpdateMemberUseCase {
  constructor(private readonly membersRepository: IMembersRepository) {}

  async execute(id: string, data: UpdateMemberDto) {
    const member = await this.membersRepository.findUnique(id);

    if (!member) {
      throw new NotFoundException('Member does not exist');
    }

    return await this.membersRepository.update(id, data);
  }
}
