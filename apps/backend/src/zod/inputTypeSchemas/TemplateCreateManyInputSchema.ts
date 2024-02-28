import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TemplateCreateManyInputSchema: z.ZodType<Prisma.TemplateCreateManyInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  template: z.string(),
  style: z.string(),
  script: z.string()
}).strict();

export default TemplateCreateManyInputSchema;
