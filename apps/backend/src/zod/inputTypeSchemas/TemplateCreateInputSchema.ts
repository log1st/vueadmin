import type { Prisma } from "@prisma/client";

import { z } from "zod";

export const TemplateCreateInputSchema: z.ZodType<Prisma.TemplateCreateInput> =
  z
    .object({
      id: z.number().int(),
      createdAt: z.coerce.date().optional(),
      template: z.string(),
      script: z.string(),
      style: z.string(),
    })
    .strict();

export default TemplateCreateInputSchema;
