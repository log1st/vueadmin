import { TemplateCreateInputSchema, TemplateSchema } from "../zod";
import { trpc } from "../trpc";
import type { AppRouterInputs, AppRouterOutputs } from "../appRouter";

export const updateTemplate = trpc.procedure
  .input(TemplateCreateInputSchema)
  .output(TemplateSchema)
  .query(({ ctx, input }) =>
    ctx.prisma.template.create({
      data: input,
    }),
  );

export type UpdateBindingInput = AppRouterInputs["updateTemplate"];
export type UpdateBindingOutput = AppRouterOutputs["updateTemplate"];
