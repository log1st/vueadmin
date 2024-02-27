import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { binding } from "@/endpoints/binding.ts";
import { trpc } from "@/trpc.ts";
import { updateBinding } from "@/endpoints/updateBinding.ts";
import { template } from "@/endpoints/template.ts";
import { updateTemplate } from "@/endpoints/updateTemplate.ts";

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
