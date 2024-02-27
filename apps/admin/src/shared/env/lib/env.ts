import { z } from "zod";

export const { apiUrl } = z
  .object({
    VITE_APP_BACKEND_URL: z.string(),
  })
  .transform((e) => ({
    apiUrl: e.VITE_APP_BACKEND_URL,
  }))
  .parse(import.meta.env);
