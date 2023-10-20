import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Auth } from 'src/shared/decorators/auth.decorator';
import { Role } from 'src/shared/decorators/roles.decorator';
import { VerifyRole } from 'src/shared/decorators/verify-role.decorator';
import { IUserPayload } from 'src/shared/types/payload';
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

  @Auth(Role['ADMIN'], Role['SECRETARY'], Role['SHEPHERD'])
  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.createMemberUseCase.execute(createMemberDto);
  }

  @Auth(Role['ADMIN'], Role['SECRETARY'], Role['SHEPHERD'])
  @Get()
  findAll(@VerifyRole() user: IUserPayload) {
    return this.getMemberUseCase.execute(user);
  }

  @Auth(Role['ADMIN'], Role['SECRETARY'])
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.updateMemberUseCase.execute(id, updateMemberDto);
  }

  @Auth(Role['ADMIN'], Role['SECRETARY'])
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteMemberUseCase.execute(id);
  }
}
