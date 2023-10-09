import { Injectable, NotFoundException } from '@nestjs/common';
import { IChurchRepository } from '../repositories/church.repository';

@Injectable()
export class DeleteChurchUseCase {
  constructor(private readonly churchRepository: IChurchRepository) {}

  async execute(id: string) {
    const church = await this.churchRepository.findUnique(id);

    if (!church) {
      throw new NotFoundException('Office does not exist');
    }

    return await this.churchRepository.delete(id);
  }
}
