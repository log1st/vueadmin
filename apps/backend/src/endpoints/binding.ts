import { trpc } from "../trpc";
import { BindingSchema } from "../zod";
import type { AppRouterInputs, AppRouterOutputs } from "../appRouter";

export const binding = trpc.procedure.output(BindingSchema).query(({ ctx }) =>
  ctx.prisma.binding.findFirstOrThrow({
    orderBy: {
      createdAt: "desc",
    },
  }),
);

export type BindingInput = AppRouterInputs["binding"];
export type BindingOutput = AppRouterOutputs["binding"];
