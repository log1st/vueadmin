<template>
  <LoadedComponent v-if="payload" v-bind="payload" />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, defineComponent, h } from "vue";
import { useBinding } from "@/shared/api";

const { data: binding } = useBinding();

const payload = computed<any>(() =>
  binding.value?.payload ? JSON.parse(binding.value?.payload) : null,
);

const LoadedComponent = defineAsyncComponent({
  loader: () => import("@/pages/component/ui/Component.vue"),
  errorComponent: defineComponent({
    render() {
      return h("div", {}, "Error");
    },
  }),
  loadingComponent: defineComponent({
    render() {
      return h("div", {}, "Loading");
    },
  }),
});
</script>
