import { trpc } from "@/trpc.ts";
import type { AppRouterInputs, AppRouterOutputs } from "@/appRouter.ts";
import { BindingCreateInputSchema, BindingSchema } from "@/zod";

export const updateBinding = trpc.procedure
  .input(BindingCreateInputSchema)
  .output(BindingSchema)
  .query(({ ctx, input }) =>
    ctx.prisma.binding.create({
      data: input,
    }),
  );

export type UpdateBindingInput = AppRouterInputs["updateBinding"];
export type UpdateBindingOutput = AppRouterOutputs["updateBinding"];
