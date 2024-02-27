import { trpc } from "@/trpc.ts";
import type { AppRouterInputs, AppRouterOutputs } from "@/appRouter.ts";
import { TemplateSchema } from "@/zod";

export const template = trpc.procedure.output(TemplateSchema).query(({ ctx }) =>
  ctx.prisma.template.findFirstOrThrow({
    orderBy: {
      createdAt: "desc",
    },
  }),
);

export type TemplateInput = AppRouterInputs["template"];
export type TemplateOutput = AppRouterOutputs["template"];
