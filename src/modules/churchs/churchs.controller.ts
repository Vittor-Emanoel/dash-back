import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Query,
} from '@nestjs/common';
import { ChurchsService } from './churchs.service';
import { CreateChurchDto } from './dto/create-church.dto';
import { UpdateChurchDto } from './dto/update-church.dto';
import { Auth } from 'src/shared/decorators/auth.decorators';
import { Role } from 'src/shared/decorators/roles.decorators';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { orderByType } from 'src/shared/models/orderBy.entity';

@Controller('churchs')
export class ChurchsController {
  constructor(private readonly churchsService: ChurchsService) {}

  @Post('/')
  @Auth(Role.ADMIN)
  @UseGuards(AuthGuard)
  @HttpCode(201)
  create(@Body() createChurchDto: CreateChurchDto) {
    const { name, shepherd } = createChurchDto;

    return this.churchsService.create({ name, shepherd });
  }

  @Get()
  @Auth(Role.ADMIN)
  @UseGuards(AuthGuard)
  findAll() {
    return this.churchsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.churchsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChurchDto: UpdateChurchDto) {
    return this.churchsService.update(+id, updateChurchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.churchsService.remove(+id);
  }
}
