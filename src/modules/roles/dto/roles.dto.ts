import { z } from 'zod';

export const rolesSchema = z.object({
  name: z.string(),
});

export type RolesDto = z.infer<typeof rolesSchema>;
