import { ActiveUserId } from '@/shared/decorators/active-userId.decorator';
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

 
  @Get("/me")
  me(@ActiveUserId() userId: string) {
    return this.usersService.me(userId);
  }

}
