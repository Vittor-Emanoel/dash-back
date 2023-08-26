import { Body, Controller, Get, Post } from '@nestjs/common';
import { ActiveUserId } from '../../shared/decorators/ActiveUserId';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update.dto';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/me')
  async me(@ActiveUserId() userId: string) {
    return this.usersService.getUserById(userId);
  }

  @Post('/update')
  async update(
    @Body() updateUserDto: UpdateUserDto,
    @ActiveUserId() userId: string,
  ) {
    return this.usersService.update(userId, updateUserDto);
  }
}
