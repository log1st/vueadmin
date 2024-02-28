import { z } from "zod";
import type { Prisma } from "@prisma/client";
import { TemplateWhereInputSchema } from "../inputTypeSchemas/TemplateWhereInputSchema";
import { TemplateOrderByWithRelationInputSchema } from "../inputTypeSchemas/TemplateOrderByWithRelationInputSchema";
import { TemplateWhereUniqueInputSchema } from "../inputTypeSchemas/TemplateWhereUniqueInputSchema";

export const TemplateAggregateArgsSchema: z.ZodType<Prisma.TemplateAggregateArgs> =
  z
    .object({
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
    })
    .strict();

export default TemplateAggregateArgsSchema;
