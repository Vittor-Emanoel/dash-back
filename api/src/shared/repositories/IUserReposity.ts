interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUsersRepository {
  create({ name, email, password }: ICreateUserDTO);
}

export { ICreateUserDTO, IUsersRepository };
