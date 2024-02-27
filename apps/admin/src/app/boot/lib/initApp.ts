import { createApp } from 'vue';
import { RouterView } from 'vue-router';
import { pinia } from '@/shared/store';
import { i18n } from '@/shared/i18n';
import { router } from '@/app/router';

export const initApp = () => {
  const app = createApp(RouterView);

  app.use(pinia);
  app.use(i18n);
  app.use(router);

  return {
    app,
    pinia,
    i18n,
  };
};