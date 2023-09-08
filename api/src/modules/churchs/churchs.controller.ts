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
import { ChurchsService } from './churchs.service';
import { CreateChurchDto } from './dto/create-church.dto';
import { UpdateChurchDto } from './dto/update-church.dto';
import { orderByType } from 'src/shared/models/orderBy.entity';

@Controller('churchs')
export class ChurchsController {
  constructor(private readonly churchsService: ChurchsService) {}

  @Post()
  create(@Body() createChurchDto: CreateChurchDto) {
    return this.churchsService.create(createChurchDto);
  }

  @Get()
  findAll(@Query() orderBy: orderByType) {
    return this.churchsService.findAll(orderBy);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) churchId: string) {
    return this.churchsService.findOne(churchId);
  }

  @Patch(':id')
  update(
    @Param('id') churchId: string,
    @Body() updateChurchDto: UpdateChurchDto,
  ) {
    return this.churchsService.update(churchId, updateChurchDto);
  }

  @Delete(':id')
  remove(@Param('id') churchId: string) {
    return this.churchsService.remove(churchId);
  }
}
