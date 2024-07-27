import { ActiveUserId } from '@/shared/decorators/active-userId.decorator';
import { ZodPipe } from '@/shared/pipes/ZodPipe';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ChurchsService } from './churchs.service';
import { ChurchDto, churchSchema } from './dto/churchs.dto';

@Controller('churchs')
export class ChurchsController {
  constructor(private readonly churchsService: ChurchsService) {}

  @Post()
  @UsePipes(new ZodPipe(churchSchema))
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createChurchDto: ChurchDto, @ActiveUserId() ownerId: string) {
    return this.churchsService.create(createChurchDto, ownerId);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  get(@ActiveUserId() ownerId: string) {
    return this.churchsService.get(ownerId);
  }
}
