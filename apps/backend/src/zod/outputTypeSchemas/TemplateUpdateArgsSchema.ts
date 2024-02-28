import { z } from "zod";
import type { Prisma } from "@prisma/client";
import { TemplateUpdateInputSchema } from "../inputTypeSchemas/TemplateUpdateInputSchema";
import { TemplateUncheckedUpdateInputSchema } from "../inputTypeSchemas/TemplateUncheckedUpdateInputSchema";
import { TemplateWhereUniqueInputSchema } from "../inputTypeSchemas/TemplateWhereUniqueInputSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TemplateSelectSchema: z.ZodType<Prisma.TemplateSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    template: z.boolean().optional(),
    style: z.boolean().optional(),
    script: z.boolean().optional(),
  })
  .strict();

export const TemplateUpdateArgsSchema: z.ZodType<Prisma.TemplateUpdateArgs> = z
  .object({
    select: TemplateSelectSchema.optional(),
    data: z.union([
      TemplateUpdateInputSchema,
      TemplateUncheckedUpdateInputSchema,
    ]),
    where: TemplateWhereUniqueInputSchema,
  })
  .strict();

export default TemplateUpdateArgsSchema;
