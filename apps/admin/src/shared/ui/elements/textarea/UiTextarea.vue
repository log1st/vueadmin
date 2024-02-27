<script setup lang="ts">
import { UiTextareaEmits, UiTextareaProps } from "./UiTextareaProps";
import { useValue } from "@/shared/vue";

const props = defineProps<UiTextareaProps>();

const emit = defineEmits<UiTextareaEmits>();

const [value] = useValue(props, "modelValue", emit);
</script>

<template>
  <textarea
    v-model="value"
    :class="[$style.root, disabled && $style.disabled]"
    :name="name"
    :placeholder="placeholder"
    :rows="rows"
    :disabled="disabled"
  />
</template>

<style lang="scss" module>
@import "@/shared/ui/assets/utils";

:root {
  --textarea--background: #fff;
  --textarea-border: #f490ff;
  --textarea--shadow: rgba(244, 144, 255, 0.3);
}

.root {
  resize: none;

  border-radius: rm(6);
  background: var(--textarea--background);
  border: solid rm(1) var(--textarea-border);

  &:focus-visible {
    box-shadow: 0 0 0 rm(2) var(--textarea--shadow);
  }

  padding: rm(10);
}

.disabled {
  filter: grayscale(1);
}
</style>
