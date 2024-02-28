import { z } from "zod";
import type { Prisma } from "@prisma/client";

export const TemplateSelectSchema: z.ZodType<Prisma.TemplateSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    template: z.boolean().optional(),
    style: z.boolean().optional(),
    script: z.boolean().optional(),
  })
  .strict();

export default TemplateSelectSchema;
