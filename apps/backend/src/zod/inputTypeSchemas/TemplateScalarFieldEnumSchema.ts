import { z } from 'zod';

export const TemplateScalarFieldEnumSchema = z.enum(['id','createdAt','template','style','script']);

export default TemplateScalarFieldEnumSchema;
