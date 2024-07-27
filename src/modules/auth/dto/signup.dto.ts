import { z } from 'zod';

export const createUser = z.object({
  name: z.string({
    required_error: 'O nome e obrigatorio!',
    invalid_type_error: 'O nome precisa ser uma string',
  }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no minimo 8 caratectes' }),
});

export type CreateUserDto = z.infer<typeof createUser>;
