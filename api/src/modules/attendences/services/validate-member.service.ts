import { Injectable, NotFoundException } from '@nestjs/common';
import { MembersRepository } from 'src/shared/repositories/members.repositories';

@Injectable()
export class ValidateMemberService {
  constructor(private readonly memberRepo: MembersRepository) {}

  async validate(memberId: string) {
    const member = await this.memberRepo.findFirst({
      where: { id: memberId },
    });

    if (!member) {
      throw new NotFoundException('Member not found');
    }
  }
}
