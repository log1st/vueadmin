import { z } from 'zod';

export const TemplateScalarFieldEnumSchema = z.enum(['id','createdAt','template','style']);

export default TemplateScalarFieldEnumSchema;
