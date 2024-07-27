import { z } from 'zod';

export const addressSchema = z.object({
  street: z.string(),
  houseNumber: z.string(),
  postalCode: z.string(),
});

export const churchSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  address: addressSchema,
});

export type AddressDto = z.infer<typeof addressSchema>;
export type ChurchDto = z.infer<typeof churchSchema>;
