import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BindingCreateManyInputSchema } from '../inputTypeSchemas/BindingCreateManyInputSchema'

export const BindingCreateManyArgsSchema: z.ZodType<Prisma.BindingCreateManyArgs> = z.object({
  data: z.union([ BindingCreateManyInputSchema,BindingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BindingCreateManyArgsSchema;
