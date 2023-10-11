export type UpdateUserDto = {
  name: string;
  email: string;
  role: Role;
};

export enum Role {
  ADMIN = 'ADMIN',
  SECRETARY = 'SECRETARY',
  FINANCE = 'FINANCE',
  USER = 'USER',
  SHEPHERD = 'SHEPHERD',
}
