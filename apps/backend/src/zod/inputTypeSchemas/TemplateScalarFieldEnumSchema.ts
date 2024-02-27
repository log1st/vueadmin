import { z } from 'zod';

export const TemplateScalarFieldEnumSchema = z.enum(['id','createdAt','template','script','style']);

export default TemplateScalarFieldEnumSchema;
