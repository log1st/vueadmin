import { z } from "zod";
import type { Prisma } from "@prisma/client";
import { BindingUpdateManyMutationInputSchema } from "../inputTypeSchemas/BindingUpdateManyMutationInputSchema";
import { BindingUncheckedUpdateManyInputSchema } from "../inputTypeSchemas/BindingUncheckedUpdateManyInputSchema";
import { BindingWhereInputSchema } from "../inputTypeSchemas/BindingWhereInputSchema";

export const BindingUpdateManyArgsSchema: z.ZodType<Prisma.BindingUpdateManyArgs> =
  z
    .object({
      data: z.union([
        BindingUpdateManyMutationInputSchema,
        BindingUncheckedUpdateManyInputSchema,
      ]),
      where: BindingWhereInputSchema.optional(),
    })
    .strict();

export default BindingUpdateManyArgsSchema;
