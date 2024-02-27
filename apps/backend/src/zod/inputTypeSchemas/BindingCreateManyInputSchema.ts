import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BindingCreateManyInputSchema: z.ZodType<Prisma.BindingCreateManyInput> = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date().optional(),
  payload: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
}).strict();

export default BindingCreateManyInputSchema;
