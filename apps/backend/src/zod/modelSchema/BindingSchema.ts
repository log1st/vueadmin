import { z } from "zod";
import { JsonValueSchema } from "../inputTypeSchemas/JsonValueSchema";

/// //////////////////////////////////////
// BINDING SCHEMA
/// //////////////////////////////////////

export const BindingSchema = z.object({
  id: z.number().int(),
  createdAt: z.coerce.date(),
  payload: JsonValueSchema.nullable(),
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
    createdAt: z.coerce.date().optional(),
  }),
);

export type BindingOptionalDefaults = z.infer<
  typeof BindingOptionalDefaultsSchema
>;

export default BindingSchema;
