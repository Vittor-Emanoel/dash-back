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

<<<<<<< HEAD
  @Auth(Role['ADMIN'], Role['SECRETARY'], Role['SHEPHERD'])
=======
  @Auth(Role['ADMIN'])
>>>>>>> 3dfcdde (feat: create custom decorator for manupulate query)
  @Post()
  create(@Body() createMemberDto: CreateMemberDto) {
    return this.createMemberUseCase.execute(createMemberDto);
  }

<<<<<<< HEAD
  @Auth(Role['ADMIN'], Role['SECRETARY'], Role['SHEPHERD'])
=======
  @Auth(Role['ADMIN'])
>>>>>>> 3dfcdde (feat: create custom decorator for manupulate query)
  @Get()
  findAll(@VerifyRole() user: IUserPayload) {
    return this.getMemberUseCase.execute(user);
  }

<<<<<<< HEAD
  @Auth(Role['ADMIN'], Role['SECRETARY'])
=======
  @Auth(Role['ADMIN'])
>>>>>>> 3dfcdde (feat: create custom decorator for manupulate query)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.updateMemberUseCase.execute(id, updateMemberDto);
  }

<<<<<<< HEAD
  @Auth(Role['ADMIN'], Role['SECRETARY'])
=======
  @Auth(Role['ADMIN'])
>>>>>>> 3dfcdde (feat: create custom decorator for manupulate query)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deleteMemberUseCase.execute(id);
  }
}
