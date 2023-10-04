import { Body, Controller, Get, Post } from '@nestjs/common';
import { ActiveUserId } from '../../shared/decorators/ActiveUserId';

import { UpdateUserDto } from './dto/update.dto';
import { UploadRoleUseCase } from './useCases/update-role.usecase';

@Controller('/users')
export class UsersController {
  constructor(private readonly updateRoleUseCase: UploadRoleUseCase) {}
  // @Get('/me')
  // async me(@ActiveUserId() userId: string) {
  //   return this.usersService.getUserById(userId);
  // }

  @Post('/update')
  async update(@Body() role: UpdateUserDto, @ActiveUserId() userId: string) {
    return this.updateRoleUseCase.execute(userId, role);
  }
}
