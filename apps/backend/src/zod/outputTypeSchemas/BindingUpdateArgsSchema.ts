import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BindingUpdateInputSchema } from '../inputTypeSchemas/BindingUpdateInputSchema'
import { BindingUncheckedUpdateInputSchema } from '../inputTypeSchemas/BindingUncheckedUpdateInputSchema'
import { BindingWhereUniqueInputSchema } from '../inputTypeSchemas/BindingWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BindingSelectSchema: z.ZodType<Prisma.BindingSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  payload: z.boolean().optional(),
}).strict()

export const BindingUpdateArgsSchema: z.ZodType<Prisma.BindingUpdateArgs> = z.object({
  select: BindingSelectSchema.optional(),
  data: z.union([ BindingUpdateInputSchema,BindingUncheckedUpdateInputSchema ]),
  where: BindingWhereUniqueInputSchema,
}).strict() ;

export default BindingUpdateArgsSchema;
