import { z } from 'zod';

export const createOrganizationSchema = z.object({
  name: z.string({
    required_error: 'O nome e obrigatorio!',
    invalid_type_error: 'O nome precisa ser uma string',
  }),
  slug: z
    .string({
      required_error: 'O slug e obrigatorio!',
      invalid_type_error: 'O slug precisa ser uma string',
    })
    .min(4, { message: 'O slug precisa ser de no minimo 4 caracteres' }),
});

export type CreateOrganizationParams = z.infer<typeof createOrganizationSchema>;
