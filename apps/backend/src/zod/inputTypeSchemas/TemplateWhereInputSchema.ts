import type { Prisma } from "@prisma/client";

import { z } from "zod";
import { IntFilterSchema } from "./IntFilterSchema";
import { DateTimeFilterSchema } from "./DateTimeFilterSchema";
import { StringFilterSchema } from "./StringFilterSchema";

export const TemplateWhereInputSchema: z.ZodType<Prisma.TemplateWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TemplateWhereInputSchema),
        z.lazy(() => TemplateWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TemplateWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TemplateWhereInputSchema),
        z.lazy(() => TemplateWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    template: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    style: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
  })
  .strict();

export default TemplateWhereInputSchema;
