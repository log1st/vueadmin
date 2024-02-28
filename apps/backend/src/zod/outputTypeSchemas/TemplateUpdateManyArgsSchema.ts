import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/TemplateUpdateManyMutationInputSchema'
import { TemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TemplateUncheckedUpdateManyInputSchema'
import { TemplateWhereInputSchema } from '../inputTypeSchemas/TemplateWhereInputSchema'

export const TemplateUpdateManyArgsSchema: z.ZodType<Prisma.TemplateUpdateManyArgs> = z.object({
  data: z.union([ TemplateUpdateManyMutationInputSchema,TemplateUncheckedUpdateManyInputSchema ]),
  where: TemplateWhereInputSchema.optional(),
}).strict() ;

export default TemplateUpdateManyArgsSchema;
