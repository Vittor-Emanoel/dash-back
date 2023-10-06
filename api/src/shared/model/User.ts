import { RoleType } from '../decorators/roles.decorators';

export class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly role: RoleType;
  readonly avatarUrl?: string;
  readonly createdAt?: Date;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    role: RoleType,
    avatarUrl: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.avatarUrl = avatarUrl;
    this.createdAt = createdAt;
  }
}
