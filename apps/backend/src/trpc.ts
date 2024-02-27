import { initTRPC } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import superjson from "superjson";

export const trpc = initTRPC
  .context<{
    prisma: PrismaClient;
  }>()
  .create({
    transformer: superjson,
  });
