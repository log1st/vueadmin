import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TemplateCountOrderByAggregateInputSchema } from './TemplateCountOrderByAggregateInputSchema';
import { TemplateAvgOrderByAggregateInputSchema } from './TemplateAvgOrderByAggregateInputSchema';
import { TemplateMaxOrderByAggregateInputSchema } from './TemplateMaxOrderByAggregateInputSchema';
import { TemplateMinOrderByAggregateInputSchema } from './TemplateMinOrderByAggregateInputSchema';
import { TemplateSumOrderByAggregateInputSchema } from './TemplateSumOrderByAggregateInputSchema';

export const TemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.TemplateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  template: z.lazy(() => SortOrderSchema).optional(),
  style: z.lazy(() => SortOrderSchema).optional(),
  script: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TemplateCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TemplateAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TemplateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TemplateMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TemplateSumOrderByAggregateInputSchema).optional()
}).strict();

export default TemplateOrderByWithAggregationInputSchema;
