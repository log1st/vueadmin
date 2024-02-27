import { createI18n } from "vue-i18n";
import { messageCompiler } from "./messageCompiler.ts";
import ru from "../locales/ru.ts";

export const fallbackLocale = "ru-RU";
export const availableLocales = [fallbackLocale];

export const i18n = createI18n({
  locale: fallbackLocale,
  fallbackLocale,
  legacy: false,
  messageCompiler,
  availableLocales,
  messages: {
    "ru-RU": ru,
  },
});
