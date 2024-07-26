import { z } from "zod";

export const onboardingSchemaStepOne = z
  .object({
    name: z.string(),
    slug: z.string().min(4)
  })
  .required() 

export type OnboardingStepOneDto = z.infer<typeof onboardingSchemaStepOne>