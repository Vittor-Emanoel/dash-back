import {
  Body,
  Controller,
  Get,
  Patch,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ActiveUserId } from '../../shared/decorators/ActiveUserId';

import { UploadRoleUseCase } from './useCases/update-role.usecase';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileDTO } from './dto/users.dto';
import { UploadAvatarUserUseCase } from './useCases/upload-avatar.usecase';
import { GetProfileUseCase } from './useCases/get-profile.usecase';
import { UpdateUserDto } from './dto/update.dto';
import { AuthGuard } from '../auth/auth.guard';

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

  @Patch('/update')
  async update(
    @Body() { role }: UpdateUserDto,
    @ActiveUserId() userId: string,
  ) {
    return this.updateRoleUseCase.execute(userId, role);
  }

  @Patch('/avatar')
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
