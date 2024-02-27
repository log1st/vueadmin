import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { AppRoot } from "../ui";

export const initApp = () => {
  const app = createApp(AppRoot);

  app.use(VueQueryPlugin, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    },
  });

  return {
    app,
  };
};
