import { z } from "zod";
import type { Prisma } from "@prisma/client";
import { BindingWhereInputSchema } from "../inputTypeSchemas/BindingWhereInputSchema";
import { BindingOrderByWithRelationInputSchema } from "../inputTypeSchemas/BindingOrderByWithRelationInputSchema";
import { BindingWhereUniqueInputSchema } from "../inputTypeSchemas/BindingWhereUniqueInputSchema";
import { BindingScalarFieldEnumSchema } from "../inputTypeSchemas/BindingScalarFieldEnumSchema";
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BindingSelectSchema: z.ZodType<Prisma.BindingSelect> = z
  .object({
    id: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    payload: z.boolean().optional(),
  })
  .strict();

export const BindingFindFirstArgsSchema: z.ZodType<Prisma.BindingFindFirstArgs> =
  z
    .object({
      select: BindingSelectSchema.optional(),
      where: BindingWhereInputSchema.optional(),
      orderBy: z
        .union([
          BindingOrderByWithRelationInputSchema.array(),
          BindingOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: BindingWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          BindingScalarFieldEnumSchema,
          BindingScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export default BindingFindFirstArgsSchema;
