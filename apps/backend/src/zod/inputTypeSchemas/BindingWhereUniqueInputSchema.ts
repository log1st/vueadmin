import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BindingWhereInputSchema } from './BindingWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const BindingWhereUniqueInputSchema: z.ZodType<Prisma.BindingWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => BindingWhereInputSchema),z.lazy(() => BindingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BindingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BindingWhereInputSchema),z.lazy(() => BindingWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  payload: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export default BindingWhereUniqueInputSchema;
