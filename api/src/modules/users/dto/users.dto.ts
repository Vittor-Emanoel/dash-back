export type UserUpdate = {
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'FINANCE' | 'SECRETARY' | 'USER';
};

export type UploadAvatar = {
  id: string;
  path: string;
};
