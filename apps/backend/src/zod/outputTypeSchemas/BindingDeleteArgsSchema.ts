import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BindingWhereUniqueInputSchema } from '../inputTypeSchemas/BindingWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BindingSelectSchema: z.ZodType<Prisma.BindingSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  payload: z.boolean().optional(),
}).strict()

export const BindingDeleteArgsSchema: z.ZodType<Prisma.BindingDeleteArgs> = z.object({
  select: BindingSelectSchema.optional(),
  where: BindingWhereUniqueInputSchema,
}).strict() ;

export default BindingDeleteArgsSchema;
