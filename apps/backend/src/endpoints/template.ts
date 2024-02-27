import { trpc } from "../trpc";
import { TemplateSchema } from "../zod";
import type { AppRouterInputs, AppRouterOutputs } from "../appRouter";

export const template = trpc.procedure.output(TemplateSchema).query(({ ctx }) =>
  ctx.prisma.template.findFirstOrThrow({
    orderBy: {
      createdAt: "desc",
    },
  }),
);

export type TemplateInput = AppRouterInputs["template"];
export type TemplateOutput = AppRouterOutputs["template"];
