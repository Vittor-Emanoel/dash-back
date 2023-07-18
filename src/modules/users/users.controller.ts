import {
  Controller,
  Get,
  NotFoundException,
  Put,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileDTO } from './dto/upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './users.service';
import { UserRepository } from 'src/shared/repositories/users.respositories';

@Controller('/users')
export class UsersController {
  constructor(
    private readonly usersService: UserService,
    private readonly usersRepo: UserRepository,
  ) {}

  @Get('/profile')
  async getProfile(@Request() req) {
    return req?.user;
  }

  @Put('avatar')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@Request() req, @UploadedFile() file: FileDTO) {
    try {
      const user = req;

      const urlAvatar = await this.usersService.upload(file);

      const addAvatar = await { ...user, avatar_url: urlAvatar };

      return addAvatar;
    } catch (error) {
      console.log(error);
    }
  }
}
