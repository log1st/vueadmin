import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const BindingSumOrderByAggregateInputSchema: z.ZodType<Prisma.BindingSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default BindingSumOrderByAggregateInputSchema;
