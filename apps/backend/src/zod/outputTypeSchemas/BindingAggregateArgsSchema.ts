import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BindingWhereInputSchema } from '../inputTypeSchemas/BindingWhereInputSchema'
import { BindingOrderByWithRelationInputSchema } from '../inputTypeSchemas/BindingOrderByWithRelationInputSchema'
import { BindingWhereUniqueInputSchema } from '../inputTypeSchemas/BindingWhereUniqueInputSchema'

export const BindingAggregateArgsSchema: z.ZodType<Prisma.BindingAggregateArgs> = z.object({
  where: BindingWhereInputSchema.optional(),
  orderBy: z.union([ BindingOrderByWithRelationInputSchema.array(),BindingOrderByWithRelationInputSchema ]).optional(),
  cursor: BindingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BindingAggregateArgsSchema;
