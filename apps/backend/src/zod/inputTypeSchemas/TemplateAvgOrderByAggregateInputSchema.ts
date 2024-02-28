import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const TemplateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TemplateAvgOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default TemplateAvgOrderByAggregateInputSchema;
