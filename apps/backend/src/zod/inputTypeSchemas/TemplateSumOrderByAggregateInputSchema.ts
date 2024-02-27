import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const TemplateSumOrderByAggregateInputSchema: z.ZodType<Prisma.TemplateSumOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default TemplateSumOrderByAggregateInputSchema;
