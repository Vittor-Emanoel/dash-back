export type UserUpdated = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AdminProfileDTO = {
  id: string;
  name: string;
  email: string;
  atavarUrl?: string;
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
