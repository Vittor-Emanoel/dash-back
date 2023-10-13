export type UserUpdate = {
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'FINANCE' | 'SECRETARY' | 'USER';
};

export type UserCreated = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'FINANCE' | 'SECRETARY' | 'USER' | 'SHEPHERD';
  avatarUrl?: string;
  createdAt?: Date;
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
