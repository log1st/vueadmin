import { z } from "zod";
import type { Prisma } from "@prisma/client";
import { BindingWhereInputSchema } from "../inputTypeSchemas/BindingWhereInputSchema";

export const BindingDeleteManyArgsSchema: z.ZodType<Prisma.BindingDeleteManyArgs> =
  z
    .object({
      where: BindingWhereInputSchema.optional(),
    })
    .strict();

export default BindingDeleteManyArgsSchema;
