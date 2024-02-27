import { z } from "zod";
import type { Prisma } from "@prisma/client";
import { TemplateWhereInputSchema } from "../inputTypeSchemas/TemplateWhereInputSchema";
import { TemplateOrderByWithRelationInputSchema } from "../inputTypeSchemas/TemplateOrderByWithRelationInputSchema";
import { TemplateWhereUniqueInputSchema } from "../inputTypeSchemas/TemplateWhereUniqueInputSchema";
import { TemplateScalarFieldEnumSchema } from "../inputTypeSchemas/TemplateScalarFieldEnumSchema";
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

export const TemplateFindFirstArgsSchema: z.ZodType<Prisma.TemplateFindFirstArgs> =
  z
    .object({
      select: TemplateSelectSchema.optional(),
      where: TemplateWhereInputSchema.optional(),
      orderBy: z
        .union([
          TemplateOrderByWithRelationInputSchema.array(),
          TemplateOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: TemplateWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          TemplateScalarFieldEnumSchema,
          TemplateScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default TemplateFindFirstArgsSchema;
