import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShepherdService } from './shepherd.service';
import { CreateShepherdDto } from './dto/create-shepherd.dto';
import { UpdateShepherdDto } from './dto/update-shepherd.dto';

@Controller('shepherd')
export class ShepherdController {
  constructor(private readonly shepherdService: ShepherdService) {}

  @Post()
  create(@Body() createShepherdDto: CreateShepherdDto) {
    return this.shepherdService.create(createShepherdDto);
  }

  @Get()
  findAll() {
    return this.shepherdService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shepherdService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShepherdDto: UpdateShepherdDto) {
    return this.shepherdService.update(+id, updateShepherdDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shepherdService.remove(+id);
  }
}
