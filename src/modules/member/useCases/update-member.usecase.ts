import { Injectable, NotFoundException } from '@nestjs/common';
import { IMembersRepository } from '../repositories/members.repository';
import { UpdateMemberDto } from '../dto/update-member.dto';
import { AlreadyExistsError } from 'src/shared/errors/alreadyExistsError';


@Injectable()
export class UpdateMemberUseCase {
  constructor(private readonly membersRepository: IMembersRepository) {}

  async execute(id: string, data: UpdateMemberDto) {
    try {
       await this.membersRepository.findUnique(id);
       await this.membersRepository.update(id, data);
    } catch (error) {
      if (error instanceof AlreadyExistsError) {
        throw error;
      } else {
        throw new NotFoundException('Member does not exist');
      }
    }
  }
}
