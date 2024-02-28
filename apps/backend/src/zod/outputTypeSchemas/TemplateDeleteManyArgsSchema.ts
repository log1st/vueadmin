import { z } from "zod";
import type { Prisma } from "@prisma/client";
import { TemplateWhereInputSchema } from "../inputTypeSchemas/TemplateWhereInputSchema";

export const TemplateDeleteManyArgsSchema: z.ZodType<Prisma.TemplateDeleteManyArgs> =
  z
    .object({
      where: TemplateWhereInputSchema.optional(),
    })
    .strict();

export default TemplateDeleteManyArgsSchema;
