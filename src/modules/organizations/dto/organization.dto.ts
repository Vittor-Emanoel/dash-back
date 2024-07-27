import { z } from 'zod';

export const createOrganization = z.object({
  name: z.string(),
  slug: z.string().min(4),
  owner_id: z.string().uuid().optional(),
});

export type CreateOrganizationDto = z.infer<typeof createOrganization>;
