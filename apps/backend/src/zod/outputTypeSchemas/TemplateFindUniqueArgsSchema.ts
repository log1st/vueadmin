import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TemplateWhereUniqueInputSchema } from '../inputTypeSchemas/TemplateWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TemplateSelectSchema: z.ZodType<Prisma.TemplateSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  template: z.boolean().optional(),
  style: z.boolean().optional(),
  script: z.boolean().optional(),
}).strict()

export const TemplateFindUniqueArgsSchema: z.ZodType<Prisma.TemplateFindUniqueArgs> = z.object({
  select: TemplateSelectSchema.optional(),
  where: TemplateWhereUniqueInputSchema,
}).strict() ;

export default TemplateFindUniqueArgsSchema;
