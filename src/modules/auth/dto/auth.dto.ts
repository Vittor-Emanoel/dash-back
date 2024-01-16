export type SignInDto = {
  email: string;
  password: string;
};

export type SignUpDto = {
  name: string;
  email: string;
  password: string;
};

export type UserCreatedDTO = {
  id: string;
  name: string;
  email: string;
  password: string;
  atavarUrl?: string;
  createdAt: Date;

  role: 'ADMIN' | 'SECRETARY' | 'FINANCE';
};

export type UserProfileDTO = {
  id: string;
  name: string;
  email: string;
  atavarUrl?: string;
  role: 'USER' | 'ADMIN' | 'SHEPHERD' | 'SECRETARY' | 'FINANCE';
};
