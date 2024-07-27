import { z } from 'zod';

export const organizationSchema = z.object({
  name: z.string(),
  slug: z.string().min(4),
});

export type OrganizationDto = z.infer<typeof organizationSchema>;
