import { initTRPC } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";

export const trpc = initTRPC
  .context<{
    prisma: PrismaClient;
  }>()
  .create();
