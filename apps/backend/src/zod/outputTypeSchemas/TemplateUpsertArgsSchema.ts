import { z } from "zod";
import type { Prisma } from "@prisma/client";
import { TemplateWhereUniqueInputSchema } from "../inputTypeSchemas/TemplateWhereUniqueInputSchema";
import { TemplateCreateInputSchema } from "../inputTypeSchemas/TemplateCreateInputSchema";
import { TemplateUncheckedCreateInputSchema } from "../inputTypeSchemas/TemplateUncheckedCreateInputSchema";
import { TemplateUpdateInputSchema } from "../inputTypeSchemas/TemplateUpdateInputSchema";
import { TemplateUncheckedUpdateInputSchema } from "../inputTypeSchemas/TemplateUncheckedUpdateInputSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TemplateSelectSchema: z.ZodType<Prisma.TemplateSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    template: z.boolean().optional(),
    style: z.boolean().optional(),
  })
  .strict();

export const TemplateUpsertArgsSchema: z.ZodType<Prisma.TemplateUpsertArgs> = z
  .object({
    select: TemplateSelectSchema.optional(),
    where: TemplateWhereUniqueInputSchema,
    create: z.union([
      TemplateCreateInputSchema,
      TemplateUncheckedCreateInputSchema,
    ]),
    update: z.union([
      TemplateUpdateInputSchema,
      TemplateUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export default TemplateUpsertArgsSchema;
