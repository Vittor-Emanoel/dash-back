import { Injectable } from '@nestjs/common';

import { IStorage } from 'src/shared/providers/storage/storage';

import { AvatarDTO } from '../dto/user.dto';
import { IUserRepository } from '../repositories/user.repository';

@Injectable()
export class UploadAvatarUserUseCase {
  constructor(
    private storage: IStorage,
    private usersRepository: IUserRepository,
  ) {}

  async execute(data: AvatarDTO) {
    // const publicUrl = process.env.SUPABASE_PUBLIC_URL ?? '';
    // const extFile = extname(data.file.originalname);
    // const transformName = `${data.idUser}${extFile}`;
    // data.file.originalname = transformName;
    // const file = await this.storage.upload(data.file, 'images');
    // const pathAvatarUser = `${publicUrl}${data.file.originalname}`;
    // await this.usersRepository.uploadAvatar(data.idUser, pathAvatarUser);
    // return file;
  }
}
