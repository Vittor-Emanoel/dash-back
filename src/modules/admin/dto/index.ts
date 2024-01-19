import { Role } from '@prisma/client';

export type CreateAdmin = {
  name: string;
  email: string;
  password: string;
};

export type AdminUpdate = {
  name: string;
  email: string;
  // password: string;
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
