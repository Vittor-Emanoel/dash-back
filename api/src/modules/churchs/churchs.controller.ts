import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Query,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';

import { CreateChurchDto } from './dto/create-church.dto';
import { UpdateChurchDto } from './dto/update-church.dto';

import { CreateChurchUseCase } from './useCases/create-church.usecase';
import { GetChurchUseCase } from './useCases/get-church.usecase';
import { DeleteChurchUseCase } from './useCases/delete-church.usecase';
import { UpdateChurchUseCase } from './useCases/update-church.usecase';

@Controller('churchs')
export class ChurchsController {
  constructor(
    private readonly createChurchUseCase: CreateChurchUseCase,
    private readonly getChurchUseCase: GetChurchUseCase,
    private readonly deleteChurchUseCase: DeleteChurchUseCase,
    private readonly updateChurchUseCase: UpdateChurchUseCase,
  ) {}

  @Post()
  create(@Body() createChurchDto: CreateChurchDto) {
    return this.createChurchUseCase.execute(createChurchDto);
  }

  // @Query() orderBy: orderByType
  @Get()
  findAll() {
    return this.getChurchUseCase.execute();
  }

  // @Get(':id')
  // findOne(@Param('id', ParseUUIDPipe) churchId: string) {
  //   return this.churchsService.findOne(churchId);
  // }

  @Patch(':id')
  update(
    @Param('id') churchId: string,
    @Body() updateChurchDto: UpdateChurchDto,
  ) {
    return this.updateChurchUseCase.execute(churchId, updateChurchDto);
  }

  @Delete(':id')
  remove(@Param('id') churchId: string) {
    return this.deleteChurchUseCase.execute(churchId);
  }
}
