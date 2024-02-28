import { z } from "zod";
import type { Prisma } from "@prisma/client";
import { BindingWhereInputSchema } from "../inputTypeSchemas/BindingWhereInputSchema";
import { BindingOrderByWithAggregationInputSchema } from "../inputTypeSchemas/BindingOrderByWithAggregationInputSchema";
import { BindingScalarFieldEnumSchema } from "../inputTypeSchemas/BindingScalarFieldEnumSchema";
import { BindingScalarWhereWithAggregatesInputSchema } from "../inputTypeSchemas/BindingScalarWhereWithAggregatesInputSchema";

export const BindingGroupByArgsSchema: z.ZodType<Prisma.BindingGroupByArgs> = z
  .object({
    where: BindingWhereInputSchema.optional(),
    orderBy: z
      .union([
        BindingOrderByWithAggregationInputSchema.array(),
        BindingOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: BindingScalarFieldEnumSchema.array(),
    having: BindingScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export default BindingGroupByArgsSchema;
