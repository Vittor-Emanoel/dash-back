import { Injectable } from '@nestjs/common';

import { extname } from 'path';
import { IUsersRepository } from '../repositories/user.repository';
import { AvatarDTO } from '../dto/users.dto';
import { IStorage } from 'src/shared/providers/storage/storage';

@Injectable()
export class UploadAvatarUserUseCase {
  constructor(
    private storage: IStorage,
    private usersRepository: IUsersRepository,
  ) {}

  async execute(data: AvatarDTO) {
    const extFile = extname(data.file.originalname);
    const transformName = `${data.idUser}${extFile}`;
    /*
      originalname = avatar.png
      originalname = transformName (892349234789234923489234.png)
     */
    data.file.originalname = transformName;
    const file = await this.storage.upload(data.file, 'avatar');

    const pathAvatarUser = `avatar/${data.file.originalname}`;

    await this.usersRepository.uploadAvatar(data.idUser, pathAvatarUser);

    return file;
  }
}
