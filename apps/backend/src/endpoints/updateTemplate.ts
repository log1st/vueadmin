import { trpc } from "@/trpc.ts";
import type { AppRouterInputs, AppRouterOutputs } from "@/appRouter.ts";
import { TemplateCreateInputSchema, TemplateSchema } from "@/zod";

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
