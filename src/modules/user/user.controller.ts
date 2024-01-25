import {
  Controller,
  Get,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ActiveUserId } from '../../shared/decorators/active-userId.decorator';
import { AuthGuard } from '../../shared/guards/auth.guard';
import { FileDTO } from './dto/user.dto';
import { ForgotPasswordUseCase } from './useCases/forgot-password.usecase';
import { GetAllUseCase } from './useCases/get-all.usecase';
import { GetProfileUseCase } from './useCases/get-profile.usecase';
import { UploadAvatarUserUseCase } from './useCases/upload-avatar.usecase';

@Controller('/users')
export class UserController {
  constructor(
    private readonly uploadAvatarUseCase: UploadAvatarUserUseCase,
    private readonly forgotPasswordUseCase: ForgotPasswordUseCase,
    private readonly getProfileUseCase: GetProfileUseCase,
    private readonly getAllUseCase: GetAllUseCase,
  ) {}

  @Get('/')
  findAll() {
    return this.getAllUseCase.execute();
  }

  @Get('/me')
  me(@ActiveUserId() userId: string) {
    return this.getProfileUseCase.execute(userId);
  }

  @Post('/forget-password')
  send(@ActiveUserId() userId: string) {
    return this.forgotPasswordUseCase.execute(userId);
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
