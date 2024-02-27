import { TemplateSchema } from "../zod";
import { trpc } from "../trpc";
import type { AppRouterInputs, AppRouterOutputs } from "../appRouter";

export const updateTemplate = trpc.procedure
  .input(TemplateSchema.pick({ style: true, template: true }))
  .output(TemplateSchema)
  .mutation(({ ctx, input }) =>
    ctx.prisma.template.create({
      data: input,
    }),
  );

export type UpdateTemplateInput = AppRouterInputs["updateTemplate"];
export type UpdateTemplateOutput = AppRouterOutputs["updateTemplate"];
