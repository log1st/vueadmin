import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TemplateCreateManyInputSchema: z.ZodType<Prisma.TemplateCreateManyInput> = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date().optional(),
  template: z.string(),
  script: z.string(),
  style: z.string()
}).strict();

export default TemplateCreateManyInputSchema;
