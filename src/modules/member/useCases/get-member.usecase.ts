import { Injectable } from '@nestjs/common';
import { IUserPayload } from 'src/shared/types/payload';
import { IMembersRepository } from '../repositories/members.repository';

@Injectable()
export class GetMemberUseCase {
  constructor(private readonly membersRepository: IMembersRepository) {}

  async execute(user: IUserPayload) {
    if (this.isUserAdmin(user)) {
      return await this.membersRepository.findAll();
    } else {
      return await this.membersRepository.findAll(user.id);
    }
  }

  private isUserAdmin(user: IUserPayload): boolean {
    return user.role === 'ADMIN';
  }
}
