import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { IntFilterSchema } from "./IntFilterSchema";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";

export const BindingWhereInputSchema: z.ZodType<Prisma.BindingWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BindingWhereInputSchema),
        z.lazy(() => BindingWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BindingWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BindingWhereInputSchema),
        z.lazy(() => BindingWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    payload: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  })
  .strict();

export default BindingWhereInputSchema;
