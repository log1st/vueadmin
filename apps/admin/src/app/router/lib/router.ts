import { createMemoryHistory, createRouter } from 'vue-router';

export const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/app/boot/ui/AppRoot.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/index/ui/IndexPage.vue'),
        },
      ],
    },
  ],
});
