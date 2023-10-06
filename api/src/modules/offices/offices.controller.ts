import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';

import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { CreateOfficeUseCase } from './useCases/create-office.usecase';
import { GetOfficeUseCase } from './useCases/get-office.usecase';
import { UpdateOfficeUseCase } from './useCases/update-office.usecase';
import { DeleteOfficeUseCase } from './useCases/delete-office.usecase';

@Controller('offices')
export class OfficesController {
  constructor(
    private readonly createOfficeUseCase: CreateOfficeUseCase,
    private readonly getOfficeUseCase: GetOfficeUseCase,
    private readonly updateOfficeUseCase: UpdateOfficeUseCase,
    private readonly deleteOfficeUseCase: DeleteOfficeUseCase,
  ) {}

  @Post()
  @HttpCode(201)
  create(@Body() createOfficeDto: CreateOfficeDto) {
    return this.createOfficeUseCase.execute(createOfficeDto);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.getOfficeUseCase.execute();
  }

  @Patch(':id')
  @HttpCode(20)
  update(@Param('id') id: string, @Body() updateOfficeDto: UpdateOfficeDto) {
    return this.updateOfficeUseCase.execute(id, updateOfficeDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.deleteOfficeUseCase.execute(id);
  }
}
