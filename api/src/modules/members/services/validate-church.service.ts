import { Injectable, NotFoundException } from '@nestjs/common';
import { ChurchsRepository } from 'src/shared/repositories/churchs.repositories';

@Injectable()
export class ValidateChurchService {
  constructor(private readonly churchRepo: ChurchsRepository) {}

  async validate(churchId: string) {
    const isOwner = await this.churchRepo.findFirst({
      where: { id: churchId },
    });

    if (!isOwner) {
      throw new NotFoundException('Church not found');
    }
  }
}
