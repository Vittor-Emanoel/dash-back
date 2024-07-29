import { z } from 'zod';

export const addressSchema = z.object({
  street: z.string(),
  houseNumber: z.string(),
  postalCode: z.string(),
});

export const memberSchema = z.object({
  fullName: z.string(),
  phone: z.string(),
  address: addressSchema,
});

export type AddressDto = z.infer<typeof addressSchema>;
export type MemberDto = z.infer<typeof memberSchema>;
