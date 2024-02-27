import { z } from "zod";
import type { Prisma } from "@prisma/client";

export const BindingSelectSchema: z.ZodType<Prisma.BindingSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    payload: z.boolean().optional(),
  })
  .strict();

export default BindingSelectSchema;
