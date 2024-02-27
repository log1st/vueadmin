import { trpc } from "@/trpc.ts";
import type { AppRouterInputs, AppRouterOutputs } from "@/appRouter.ts";
import { BindingSchema } from "@/zod";

export const binding = trpc.procedure.output(BindingSchema).query(({ ctx }) =>
  ctx.prisma.binding.findFirstOrThrow({
    orderBy: {
      createdAt: "desc",
    },
  }),
);

export type BindingInput = AppRouterInputs["binding"];
export type BindingOutput = AppRouterOutputs["binding"];
