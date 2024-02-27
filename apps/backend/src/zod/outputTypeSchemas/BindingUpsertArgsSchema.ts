import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BindingWhereUniqueInputSchema } from '../inputTypeSchemas/BindingWhereUniqueInputSchema'
import { BindingCreateInputSchema } from '../inputTypeSchemas/BindingCreateInputSchema'
import { BindingUncheckedCreateInputSchema } from '../inputTypeSchemas/BindingUncheckedCreateInputSchema'
import { BindingUpdateInputSchema } from '../inputTypeSchemas/BindingUpdateInputSchema'
import { BindingUncheckedUpdateInputSchema } from '../inputTypeSchemas/BindingUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BindingSelectSchema: z.ZodType<Prisma.BindingSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  payload: z.boolean().optional(),
}).strict()

export const BindingUpsertArgsSchema: z.ZodType<Prisma.BindingUpsertArgs> = z.object({
  select: BindingSelectSchema.optional(),
  where: BindingWhereUniqueInputSchema,
  create: z.union([ BindingCreateInputSchema,BindingUncheckedCreateInputSchema ]),
  update: z.union([ BindingUpdateInputSchema,BindingUncheckedUpdateInputSchema ]),
}).strict() ;

export default BindingUpsertArgsSchema;
