import { Injectable } from '@nestjs/common';
import { CreateChurchDto } from '../dto/create-church.dto';
import { IChurchRepository } from '../repositories/church.repository';

@Injectable()
export class CreateChurchUseCase {
  constructor(private readonly churchRepository: IChurchRepository) {}

  async execute(data: CreateChurchDto) {
    const church = await this.churchRepository.create(data);

    return church;
  }
}
