<template>
  <div :class="$style.preview">
    <div ref="container"></div>
    <div v-html="styleTemplate"></div>
    <div v-if="error" :class="$style.error">
      Error. See console for details.
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  createApp,
  defineComponent,
  ref,
  watchEffect,
  App,
  computed,
} from "vue";

const props = defineProps<{
  template: string;
  payload: string;
  style: string;
}>();

const container = ref<HTMLDivElement>();

const error = ref(false);

const oldApp = ref<App>();

const styleTemplate = computed(() => `<style>${String(props.style)}</style>`);

watchEffect(() => {
  oldApp.value?.unmount();
  if (!container.value) {
    return;
  }

  error.value = false;

  try {
    const passedProps = JSON.parse(props.payload || "{}") as Record<
      string,
      unknown
    >;

    oldApp.value = createApp(
      defineComponent({
        template: props.template,
        props: Object.keys(passedProps),
      }),
      passedProps,
    );

    oldApp.value.mount(container.value);
  } catch (e) {
    console.log(e);
    error.value = true;
  }
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
