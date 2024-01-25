import { Role } from '@prisma/client';

export type UserUpdated = {
  name: string;
  email: string;
  role: 'ADMIN' | 'SECRETARY' | 'FINANCE';
};

export type AdminProfileDTO = {
  id: string;
  name: string;
  email: string;
  atavarUrl?: string;
  role: Role;
};

export type UploadAvatar = {
  id: string;
  path: string;
};

export type FileDTO = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
};

export type AvatarDTO = {
  idUser: string;
  file: FileDTO;
};
