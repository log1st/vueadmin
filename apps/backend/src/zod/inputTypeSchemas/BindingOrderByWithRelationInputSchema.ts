import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { SortOrderSchema } from "./SortOrderSchema";

export const BindingOrderByWithRelationInputSchema: z.ZodType<Prisma.BindingOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      payload: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export default BindingOrderByWithRelationInputSchema;
