import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { CreateMemberUseCase } from './useCases/create-member.usecase';
import { DeleteMemberUseCase } from './useCases/delete-member.usecase';
import { GetMemberUseCase } from './useCases/get-member.usecase';
import { UpdateMemberUseCase } from './useCases/update-member.usecase';

@Controller('members')
export class MembersController {
  constructor(
    private readonly createMemberUseCase: CreateMemberUseCase,
    private readonly getMemberUseCase: GetMemberUseCase,
    private readonly updateMemberUseCase: UpdateMemberUseCase,
    private readonly deleteMemberUseCase: DeleteMemberUseCase,
  ) {}

  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.createMemberUseCase.execute(createMemberDto);
  }

  //@ActiveUserId() id: string
  @Get()
  findAll() {
    return this.getMemberUseCase.execute();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.updateMemberUseCase.execute(id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteMemberUseCase.execute(id);
  }
}
