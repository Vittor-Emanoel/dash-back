import {
  Body,
  Controller,
  Get,
  Patch,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ActiveUserId } from '../../shared/decorators/active-userId.decorator';

import { FileInterceptor } from '@nestjs/platform-express';

import { AuthGuard } from '../../shared/guards/auth.guard';

import { UpdateUserDto } from './dto/update.dto';
import { FileDTO } from './dto/users.dto';
import { GetProfileUseCase } from './useCases/get-profile.usecase';
import { UploadRoleUseCase } from './useCases/update-role.usecase';
import { UploadAvatarUserUseCase } from './useCases/upload-avatar.usecase';

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
