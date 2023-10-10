import { Injectable } from '@nestjs/common';
import { IMembersRepository } from '../repositories/members.repository';

@Injectable()
export class GetMemberUseCase {
  constructor(private readonly membersRepository: IMembersRepository) {}

  async execute(id: string) {
    return await this.membersRepository.findAll(id);
  }
}
