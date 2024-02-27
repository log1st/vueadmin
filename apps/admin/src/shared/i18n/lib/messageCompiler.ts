import IntlMessageFormat from 'intl-messageformat';

import type {
  MessageCompiler, CompileError, MessageContext,
} from 'vue-i18n';

export const messageCompiler: MessageCompiler = (
  message,
  { locale, key, onError },
) => {
  if (typeof message === 'string') {
    const formatter = new IntlMessageFormat(message, locale);
    return (ctx: MessageContext) => formatter.format(ctx.values) as string;
  }

  onError?.(new Error('not support for AST') as CompileError);

  return () => key;
};
