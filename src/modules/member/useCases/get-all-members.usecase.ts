import { Injectable } from '@nestjs/common';
import { IMembersRepository } from '../repositories/members.repository';

@Injectable()
export class GetAllMembers {
  constructor(private readonly membersRepository: IMembersRepository) {}
  async execute() {
    return this.membersRepository.find();
  }
}
