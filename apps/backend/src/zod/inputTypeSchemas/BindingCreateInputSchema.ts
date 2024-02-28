import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BindingCreateInputSchema: z.ZodType<Prisma.BindingCreateInput> = z.object({
  createdAt: z.coerce.date().optional(),
  payload: z.string()
}).strict();

export default BindingCreateInputSchema;
