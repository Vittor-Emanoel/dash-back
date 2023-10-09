import { Injectable, NotFoundException } from '@nestjs/common';
import { IMembersRepository } from '../repositories/members.repository';

@Injectable()
export class DeleteMemberUseCase {
  constructor(private readonly membersRepository: IMembersRepository) {}

  async execute(id: string) {
    const member = await this.membersRepository.findUnique(id);

    if (!member) {
      throw new NotFoundException('Member does not exist');
    }

    return await this.membersRepository.delete(id);
  }
}
