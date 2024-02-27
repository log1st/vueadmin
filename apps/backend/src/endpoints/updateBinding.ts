import { trpc } from "../trpc";
import { BindingCreateInputSchema, BindingSchema } from "../zod";
import type { AppRouterInputs, AppRouterOutputs } from "../appRouter";

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
