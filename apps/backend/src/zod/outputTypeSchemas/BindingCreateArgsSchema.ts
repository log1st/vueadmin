import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BindingCreateInputSchema } from '../inputTypeSchemas/BindingCreateInputSchema'
import { BindingUncheckedCreateInputSchema } from '../inputTypeSchemas/BindingUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BindingSelectSchema: z.ZodType<Prisma.BindingSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  payload: z.boolean().optional(),
}).strict()

export const BindingCreateArgsSchema: z.ZodType<Prisma.BindingCreateArgs> = z.object({
  select: BindingSelectSchema.optional(),
  data: z.union([ BindingCreateInputSchema,BindingUncheckedCreateInputSchema ]),
}).strict() ;

export default BindingCreateArgsSchema;
