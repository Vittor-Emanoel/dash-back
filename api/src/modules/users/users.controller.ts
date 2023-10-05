import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ActiveUserId } from '../../shared/decorators/ActiveUserId';

import { Role } from './dto/update.dto';
import { UploadRoleUseCase } from './useCases/update-role.usecase';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileDTO } from './dto/users.dto';
import { UploadAvatarUserUseCase } from './useCases/upload-avatar.usecase';
import { AuthGuard } from '../auth/auth.guard';

@Controller('/users')
export class UsersController {
  constructor(
    private readonly updateRoleUseCase: UploadRoleUseCase,
    private readonly uploadAvatarUseCase: UploadAvatarUserUseCase,
  ) {}
  // @Get('/me')
  // async me(@ActiveUserId() userId: string) {
  //   return this.usersService.getUserById(userId);
  // }

  @Post('/update')
  async update(@Body() role: Role, @ActiveUserId() userId: string) {
    return this.updateRoleUseCase.execute(userId, role);
  }

  @Put('/avatar')
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(AuthGuard)
  async uploadFile(
    @ActiveUserId() userId: string,
    @UploadedFile() file: FileDTO,
  ) {
    const result = await this.uploadAvatarUseCase.execute({
      file,
      idUser: userId,
    });
    return result;
  }
}
