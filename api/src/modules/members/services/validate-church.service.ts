import { Injectable, NotFoundException } from '@nestjs/common';
import { ChurchsRepository } from 'src/shared/repositories/churchs.repositories';

@Injectable()
export class ValidateChurchService {
  constructor(private readonly churchRepo: ChurchsRepository) {}

  async validate(churchId: string) {
    const church = await this.churchRepo.findFirst({
      where: { id: churchId },
    });

    if (!church) {
      throw new NotFoundException('Church not found');
    }
  }
}
