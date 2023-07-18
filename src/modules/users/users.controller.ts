import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Request,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('profile')
  async getProfile(@Request() req) {
    return req?.user;
  }

  @Post('profile')
  async editProfile(@Body() @Request() req) {
    const user = req?.user;

    if (!user) {
      throw new NotFoundException('User not exists');
    }
  }
}
