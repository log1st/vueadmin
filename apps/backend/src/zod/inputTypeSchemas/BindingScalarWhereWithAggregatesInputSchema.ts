import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { JsonWithAggregatesFilterSchema } from './JsonWithAggregatesFilterSchema';

export const BindingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BindingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BindingScalarWhereWithAggregatesInputSchema),z.lazy(() => BindingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BindingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BindingScalarWhereWithAggregatesInputSchema),z.lazy(() => BindingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  payload: z.lazy(() => JsonWithAggregatesFilterSchema).optional()
}).strict();

export default BindingScalarWhereWithAggregatesInputSchema;
