import { z } from "zod";

/// //////////////////////////////////////
// BINDING SCHEMA
/// //////////////////////////////////////

export const BindingSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  payload: z.string(),
});

export type Binding = z.infer<typeof BindingSchema>;

/// //////////////////////////////////////
// BINDING PARTIAL SCHEMA
/// //////////////////////////////////////

export const BindingPartialSchema = BindingSchema.partial();

export type BindingPartial = z.infer<typeof BindingPartialSchema>;

/// //////////////////////////////////////
// BINDING OPTIONAL DEFAULTS SCHEMA
/// //////////////////////////////////////

export const BindingOptionalDefaultsSchema = BindingSchema.merge(
  z.object({
    id: z.number().int().optional(),
    createdAt: z.coerce.date().optional(),
  }),
);

export type BindingOptionalDefaults = z.infer<
  typeof BindingOptionalDefaultsSchema
>;

export default BindingSchema;
