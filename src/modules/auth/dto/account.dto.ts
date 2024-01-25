import { Church, Role } from '@prisma/client';

export type UserCreatedDTO = {
  id: string;
  name: string;
  email: string;
  password: string;
  atavarUrl?: string;
  church?: Church[];

  createdAt: Date;
  role: 'ADMIN' | 'SECRETARY' | 'FINANCE';
};

export type UserProfileDTO = {
  id: string;
  name: string;
  email: string;
  atavarUrl?: string;
  role: Role;
};
