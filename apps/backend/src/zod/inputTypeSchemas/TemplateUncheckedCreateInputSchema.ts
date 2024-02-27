import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const TemplateUncheckedCreateInputSchema: z.ZodType<Prisma.TemplateUncheckedCreateInput> =
  z
    .object({
      id: z.number().int(),
      createdAt: z.coerce.date().optional(),
      template: z.string(),
      script: z.string(),
      style: z.string(),
    })
    .strict();

export default TemplateUncheckedCreateInputSchema;
