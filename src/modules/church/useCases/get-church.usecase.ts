import { Injectable } from '@nestjs/common';
import { IChurchRepository } from '../repositories/church.repository';

@Injectable()
export class GetChurchUseCase {
  constructor(private readonly churchRepository: IChurchRepository) {}

  async execute() {
    return await this.churchRepository.findAll();
  }
}
