import { trpc } from "../trpc";
import { BindingSchema } from "../zod";
import type { AppRouterInputs, AppRouterOutputs } from "../appRouter";

export const updateBinding = trpc.procedure
  .input(
    BindingSchema.pick({
      payload: true,
    }),
  )
  .output(BindingSchema)
  .mutation(({ ctx, input }) =>
    ctx.prisma.binding.create({
      data: input,
    }),
  );

export type UpdateBindingInput = AppRouterInputs["updateBinding"];
export type UpdateBindingOutput = AppRouterOutputs["updateBinding"];
