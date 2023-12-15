export type UserUpdate = {
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'SECRETARY' | 'FINANCE' | 'USER' | 'SHEPHERD';
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
