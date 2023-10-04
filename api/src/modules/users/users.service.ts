import { Injectable } from '@nestjs/common';

import { UpdateUserDto } from './dto/update.dto';
import { IUsersRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: IUsersRepository) {}

  // async getUserById(userId: string) {
  //   const user = await this.usersRepo.findUnique({
  //     where: { id: userId },
  //     select: {
  //       name: true,
  //       email: true,
  //       role: true,
  //     },
  //   });

  //   return { user };
  // }

  // async update(userId: string, updateUserDto: UpdateUserDto) {
  //   const { role } = updateUserDto;

  //   const user = await this.usersRepo.update({
  //     where: { id: userId },
  //     data: {
  //       role,
  //     },
  //     select: {
  //       name: true,
  //       email: true,
  //       role: true,
  //     },
  //   });

  //   return { user };
  // }
}
