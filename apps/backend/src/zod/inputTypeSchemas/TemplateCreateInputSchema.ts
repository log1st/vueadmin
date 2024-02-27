import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TemplateCreateInputSchema: z.ZodType<Prisma.TemplateCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  template: z.string(),
  style: z.string()
}).strict();

export default TemplateCreateInputSchema;
