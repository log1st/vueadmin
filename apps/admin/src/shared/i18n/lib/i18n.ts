import { createI18n } from 'vue-i18n';
import { messageCompiler } from './messageCompiler.ts';

export const fallbackLocale = 'en-US';
export const availableLocales = [fallbackLocale];

export const i18n = createI18n({
  locale: fallbackLocale,
  fallbackLocale,
  legacy: false,
  messageCompiler,
  availableLocales,
});
