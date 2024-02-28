<template>
  <div :class="$style.preview">
    <Suspense>
      <template #fallback>Error while compiling</template>
      <LoadedComponent v-bind="parsedPayload" />
    </Suspense>
    <div ref="styleRef"></div>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable no-useless-escape */
import { computed, defineAsyncComponent, h, markRaw, ref } from "vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { loadModule } from "vue3-sfc-loader";
import * as Vue from "vue";

const props = defineProps<{
  payload: string;
  script: string;
  template: string;
  style: string;
}>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parsedPayload = computed<any>(() => {
  try {
    return JSON.parse(props.payload);
  } catch {
    return {};
  }
});

const styleRef = ref<HTMLStyleElement>();

const LoadedComponent = computed(() => {
  const finalScript = `
<template>${props.template}</template>
<script lang="ts" setup>${props.script}<\/script>
<style scoped>${props.style}</style>
`;

  return markRaw(
    defineAsyncComponent({
      errorComponent: () => h("div", {}, "Error while compiling"),
      loader: async () => {
        try {
          return await loadModule(`Component.vue`, {
            moduleCache: {
              vue: Vue,
            },
            async getFile() {
              return finalScript;
            },
            addStyle(textContent: string) {
              if (!styleRef.value) {
                return;
              }
              styleRef.value.innerHTML = "";

              const style = Object.assign(document.createElement("style"), {
                textContent,
              });
              styleRef.value?.appendChild(style);
            },
          });
        } catch (e) {
          return () => h("div", {}, "Error while compiling. See console.");
        }
      },
    }),
  );
});
</script>

<style lang="scss" module>
.preview {
  display: flex;
  flex-direction: column;
  gap: 10px;

  min-block-size: 100%;
}

.error {
  color: red;
  font-size: 0.7em;
  margin-block-start: auto;
}
</style>
