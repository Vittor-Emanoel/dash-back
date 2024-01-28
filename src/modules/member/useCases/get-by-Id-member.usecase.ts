import { Injectable, NotFoundException } from '@nestjs/common';
import { IMembersRepository } from '../repositories/members.repository';

@Injectable()
export class GetMemberById {
  constructor(private readonly membersRepository: IMembersRepository) {}
  async execute(id: string) {
    const member = await this.membersRepository.findById(id);

    if (!member) {
      throw new NotFoundException('Member does not exist');
    }

    return member;
  }
}
