import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const TemplateMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TemplateMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      template: z.lazy(() => SortOrderSchema).optional(),
      style: z.lazy(() => SortOrderSchema).optional(),
      script: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default TemplateMaxOrderByAggregateInputSchema;
