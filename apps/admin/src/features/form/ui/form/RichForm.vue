<template>
  <form @submit.prevent="submit">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { get, set } from "lodash-es";
import { RichFormEmits, RichFormProps } from "./RichFormProps.ts";
import { useValue } from "@/shared/vue";
import { richFormContextInjectionKey } from "../../lib/RichFormContext.ts";

const props = defineProps<RichFormProps>();

const emit = defineEmits<RichFormEmits>();

const [value] = useValue(props, "modelValue", emit);

const submitting = ref(false);

provide(richFormContextInjectionKey, {
  getFieldValue(field) {
    return get(value.value, field);
  },
  setFieldValue(field, fieldValue) {
    set(value.value as Record<string, unknown>, field, fieldValue);
  },
  submitting,
});

const submit = async () => {
  if (submitting.value) {
    return;
  }
  submitting.value = true;

  await props.mutate?.(value.value);

  submitting.value = false;
};
</script>
