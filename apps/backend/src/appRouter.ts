import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { trpc } from "./trpc";
import { binding } from "./endpoints/binding";
import { updateBinding } from "./endpoints/updateBinding";
import { template } from "./endpoints/template";
import { updateTemplate } from "./endpoints/updateTemplate";

const appRouter = trpc.router({
  binding,
  updateBinding,
  template,
  updateTemplate,
});

export { appRouter };

export type AppRouter = typeof appRouter;

export type AppRouterInputs = inferRouterInputs<AppRouter>;
export type AppRouterOutputs = inferRouterOutputs<AppRouter>;
