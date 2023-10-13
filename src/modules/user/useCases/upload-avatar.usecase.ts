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
    const publicUrl = process.env.SUPABASE_PUBLIC_URL ?? '';
    const extFile = extname(data.file.originalname);
    const transformName = `${data.idUser}${extFile}`;

    data.file.originalname = transformName;
    const file = await this.storage.upload(data.file, 'images');

    const pathAvatarUser = `${publicUrl}${data.file.originalname}`;

    await this.usersRepository.uploadAvatar(data.idUser, pathAvatarUser);

    return file;
  }
}
