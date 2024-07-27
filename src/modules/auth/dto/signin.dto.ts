import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'A senha deve ter no minimo 8 caratectes' }),
});

export type LoginUserDto = z.infer<typeof loginSchema>;
