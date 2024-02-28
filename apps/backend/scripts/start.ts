import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { trpc } from "@elysiajs/trpc";
import { PrismaClient } from "@prisma/client";
import { HOST, PORT } from "../src/env";
import { appRouter, createAppCaller } from "../src/appRouter";

const prisma = new PrismaClient();

const caller = createAppCaller({
  prisma,
});

async function getSfc() {
  const template = await caller.template();

  return `
      <template>${template.template}</template>
      
      <script lang="ts" setup>${template.script}</script>
      
      <style scoped>${template.style}</style>
    `;
}

const app = new Elysia()
  .use(cors())
  .use(
    trpc(appRouter, {
      endpoint: "",
      createContext: () => ({
        prisma,
      }),
    }),
  )
  .get("/sfc", async ({ set }) => {
    Object.assign(set.headers, {
      "Content-Type": "text/plain",
      "Content-Disposition": 'attachment; filename="Component.vue"',
    });

    return getSfc();
  })
  .listen({
    port: PORT,
    hostname: HOST,
  });

export type App = typeof app;

console.log(
  `Backend started at http://${app.server?.hostname}:${app.server?.port}`,
);
