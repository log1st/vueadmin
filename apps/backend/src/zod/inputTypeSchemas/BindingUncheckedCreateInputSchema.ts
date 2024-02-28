import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const BindingUncheckedCreateInputSchema: z.ZodType<Prisma.BindingUncheckedCreateInput> =
  z
    .object({
      id: z.number().int().optional(),
      createdAt: z.coerce.date().optional(),
      payload: z.string(),
    })
    .strict();

export default BindingUncheckedCreateInputSchema;
