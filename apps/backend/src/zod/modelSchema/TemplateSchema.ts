import { z } from "zod";

/// //////////////////////////////////////
// TEMPLATE SCHEMA
/// //////////////////////////////////////

export const TemplateSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  template: z.string(),
  style: z.string(),
});

export type Template = z.infer<typeof TemplateSchema>;

/// //////////////////////////////////////
// TEMPLATE PARTIAL SCHEMA
/// //////////////////////////////////////

export const TemplatePartialSchema = TemplateSchema.partial();

export type TemplatePartial = z.infer<typeof TemplatePartialSchema>;

/// //////////////////////////////////////
// TEMPLATE OPTIONAL DEFAULTS SCHEMA
/// //////////////////////////////////////

export const TemplateOptionalDefaultsSchema = TemplateSchema.merge(
  z.object({
    id: z.number().int().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type TemplateOptionalDefaults = z.infer<
  typeof TemplateOptionalDefaultsSchema
>;

export default TemplateSchema;
