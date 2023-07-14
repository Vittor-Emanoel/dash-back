import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { HttpCode, Patch, Query } from '@nestjs/common/decorators';
import { orderByType } from './entities/orderBy.entity';
import { UpdateMemberDto } from './dto/update-member.dto';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @Get()
  findAll(@Query('orderBy') orderBy: orderByType) {
    return this.membersService.findAll(orderBy);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) memberId: string) {
    return this.membersService.findOne(memberId);
  }

  @Patch(':id')
  update(
    @Param('id') memberId: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    return this.membersService.update(memberId, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') memberId: string) {
    return this.membersService.remove(memberId);
  }
}
