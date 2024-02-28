import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TemplateWhereInputSchema } from './TemplateWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const TemplateWhereUniqueInputSchema: z.ZodType<Prisma.TemplateWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TemplateWhereInputSchema),z.lazy(() => TemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TemplateWhereInputSchema),z.lazy(() => TemplateWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  template: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  style: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  script: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export default TemplateWhereUniqueInputSchema;
