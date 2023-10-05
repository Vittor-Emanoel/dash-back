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

import { UploadRoleUseCase } from './useCases/update-role.usecase';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileDTO } from './dto/users.dto';
import { UploadAvatarUserUseCase } from './useCases/upload-avatar.usecase';
import { AuthGuard } from '../auth/auth.guard';
import { GetProfileUseCase } from './useCases/get-profile.usecase';
import { Role, UpdateUserDto } from './dto/update.dto';

@Controller('/users')
export class UsersController {
  constructor(
    private readonly updateRoleUseCase: UploadRoleUseCase,
    private readonly uploadAvatarUseCase: UploadAvatarUserUseCase,
    private readonly getProfileUseCase: GetProfileUseCase,
  ) {}

  @Get('/me')
  async me(@ActiveUserId() userId: string) {
    return this.getProfileUseCase.execute(userId);
  }

  @Post('/update')
  async update(
    @Body() { role }: UpdateUserDto,
    @ActiveUserId() userId: string,
  ) {
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
