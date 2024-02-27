import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { trpc } from "@elysiajs/trpc";
import { PrismaClient } from "@prisma/client";
import { HOST, PORT } from "../src/env";
import { appRouter } from "../src/appRouter";

const app = new Elysia()
  .use(cors())
  .use(
    trpc(appRouter, {
      endpoint: "",
      createContext: () => ({
        prisma: new PrismaClient(),
      }),
    }),
  )
  .listen({
    port: PORT,
    hostname: HOST,
  });

export type App = typeof app;

console.log(
  `Backend started at http://${app.server?.hostname}:${app.server?.port}`,
);
