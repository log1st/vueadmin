import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BindingUncheckedCreateInputSchema: z.ZodType<Prisma.BindingUncheckedCreateInput> = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date().optional(),
  payload: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
}).strict();

export default BindingUncheckedCreateInputSchema;
