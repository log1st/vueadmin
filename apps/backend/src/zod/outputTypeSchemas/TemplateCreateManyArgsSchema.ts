import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TemplateCreateManyInputSchema } from '../inputTypeSchemas/TemplateCreateManyInputSchema'

export const TemplateCreateManyArgsSchema: z.ZodType<Prisma.TemplateCreateManyArgs> = z.object({
  data: z.union([ TemplateCreateManyInputSchema,TemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TemplateCreateManyArgsSchema;
