import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const BindingCreateManyInputSchema: z.ZodType<Prisma.BindingCreateManyInput> =
  z
    .object({
      id: z.number().int().optional(),
      createdAt: z.coerce.date().optional(),
      payload: z.string(),
    })
    .strict();

export default BindingCreateManyInputSchema;
