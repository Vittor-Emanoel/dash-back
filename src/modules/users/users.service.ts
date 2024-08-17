import { Injectable } from '@nestjs/common';
import { IUsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
 constructor(private readonly usersRepository: IUsersRepository){}

  async me(userId: string) {
    return await this.usersRepository.me(userId)
  }

}
