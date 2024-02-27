import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TemplateCreateInputSchema } from '../inputTypeSchemas/TemplateCreateInputSchema'
import { TemplateUncheckedCreateInputSchema } from '../inputTypeSchemas/TemplateUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TemplateSelectSchema: z.ZodType<Prisma.TemplateSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  template: z.boolean().optional(),
  script: z.boolean().optional(),
  style: z.boolean().optional(),
}).strict()

export const TemplateCreateArgsSchema: z.ZodType<Prisma.TemplateCreateArgs> = z.object({
  select: TemplateSelectSchema.optional(),
  data: z.union([ TemplateCreateInputSchema,TemplateUncheckedCreateInputSchema ]),
}).strict() ;

export default TemplateCreateArgsSchema;
