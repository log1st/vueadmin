import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";
import { BindingCountOrderByAggregateInputSchema } from "./BindingCountOrderByAggregateInputSchema";
import { BindingAvgOrderByAggregateInputSchema } from "./BindingAvgOrderByAggregateInputSchema";
import { BindingMaxOrderByAggregateInputSchema } from "./BindingMaxOrderByAggregateInputSchema";
import { BindingMinOrderByAggregateInputSchema } from "./BindingMinOrderByAggregateInputSchema";
import { BindingSumOrderByAggregateInputSchema } from "./BindingSumOrderByAggregateInputSchema";

export const BindingOrderByWithAggregationInputSchema: z.ZodType<Prisma.BindingOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      payload: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => BindingCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => BindingAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => BindingMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => BindingMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => BindingSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export default BindingOrderByWithAggregationInputSchema;
