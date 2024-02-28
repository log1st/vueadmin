import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TemplateWhereInputSchema } from '../inputTypeSchemas/TemplateWhereInputSchema'
import { TemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TemplateOrderByWithAggregationInputSchema'
import { TemplateScalarFieldEnumSchema } from '../inputTypeSchemas/TemplateScalarFieldEnumSchema'
import { TemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TemplateScalarWhereWithAggregatesInputSchema'

export const TemplateGroupByArgsSchema: z.ZodType<Prisma.TemplateGroupByArgs> = z.object({
  where: TemplateWhereInputSchema.optional(),
  orderBy: z.union([ TemplateOrderByWithAggregationInputSchema.array(),TemplateOrderByWithAggregationInputSchema ]).optional(),
  by: TemplateScalarFieldEnumSchema.array(),
  having: TemplateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TemplateGroupByArgsSchema;
