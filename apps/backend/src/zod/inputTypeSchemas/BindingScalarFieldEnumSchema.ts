import { z } from "zod";

export const BindingScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "payload",
]);

export default BindingScalarFieldEnumSchema;
