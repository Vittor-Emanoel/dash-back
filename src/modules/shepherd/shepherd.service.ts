import { Injectable } from '@nestjs/common';
import { CreateShepherdDto } from './dto/create-shepherd.dto';
import { UpdateShepherdDto } from './dto/update-shepherd.dto';

@Injectable()
export class ShepherdService {
  create(createShepherdDto: CreateShepherdDto) {
    return 'This action adds a new shepherd';
  }

  findAll() {
    return `This action returns all shepherd`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shepherd`;
  }

  update(id: number, updateShepherdDto: UpdateShepherdDto) {
    return `This action updates a #${id} shepherd`;
  }

  remove(id: number) {
    return `This action removes a #${id} shepherd`;
  }
}
