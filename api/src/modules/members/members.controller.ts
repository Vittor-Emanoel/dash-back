import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { MembersService } from './services/members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { orderByType } from 'src/shared/models/orderBy.entity';
import { Auth } from 'src/shared/decorators/auth.decorators';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from 'src/shared/decorators/roles.decorators';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  // @Auth(Role.ADMIN)
  @UseGuards(AuthGuard)
  @HttpCode(201)
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @Get('')
  @HttpCode(200)
  findAll(@Query() orderBy: orderByType) {
    return this.membersService.findAll(orderBy);
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id', ParseUUIDPipe) memberId: string) {
    return this.membersService.findById(memberId);
  }

  @Patch(':id')
  @HttpCode(201)
  update(
    @Param('id') memberId: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    return this.membersService.update(memberId, updateMemberDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') memberId: string) {
    return this.membersService.remove(memberId);
  }
}
