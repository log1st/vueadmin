import { z } from "zod";

export const { PORT, HOST } = z
  .object({
    PORT: z.coerce.number().default(3000),
    HOST: z.string().default("0.0.0.0"),
    DATABASE_URL: z.string().url(),
  })
  .parse(process.env);
