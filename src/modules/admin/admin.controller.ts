import {
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

import { FileDTO } from './dto';

import { GetAllUseCase } from './useCases/get-all.usecase';
import { GetProfileUseCase } from './useCases/get-profile.usecase';

import { UploadAvatarUserUseCase } from './useCases/upload-avatar.usecase';

@Controller('/admins')
export class AdminController {
  constructor(
    private readonly uploadAvatarUseCase: UploadAvatarUserUseCase,
    private readonly getProfileUseCase: GetProfileUseCase,
    private readonly getAllUseCase: GetAllUseCase,
  ) {}

  @Get('/')
  async findAll() {
    return this.getAllUseCase.execute();
  }

  @Get('/me')
  async me(@ActiveUserId() userId: string) {
    return this.getProfileUseCase.execute(userId);
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
