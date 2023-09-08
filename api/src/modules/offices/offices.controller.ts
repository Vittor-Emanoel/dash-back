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
import { OfficesService } from './offices.service';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';

@Controller('offices')
export class OfficesController {
  constructor(private readonly officesService: OfficesService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createOfficeDto: CreateOfficeDto) {
    return this.officesService.create(createOfficeDto);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.officesService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') officeId: string) {
    return this.officesService.findOne(officeId);
  }

  @Patch(':id')
  @HttpCode(20)
  update(
    @Param('id') officeId: string,
    @Body() updateOfficeDto: UpdateOfficeDto,
  ) {
    return this.officesService.update(officeId, updateOfficeDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') officeId: string) {
    return this.officesService.remove(officeId);
  }
}
