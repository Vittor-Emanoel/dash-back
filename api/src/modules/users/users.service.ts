import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/shared/repositories/users.respositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepo: UserRepository) {}

  async getUserById(userId: string) {
    const user = await this.usersRepo.findUnique({
      where: { id: userId },
      select: {
        name: true,
        email: true,
        role: true,
      },
    });

    return { user };
  }
}
