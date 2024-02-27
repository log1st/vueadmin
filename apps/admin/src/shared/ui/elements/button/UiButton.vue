<script setup lang="ts">
import { UiButtonEmits, UiButtonProps } from "./UiButtonProps";

const props = withDefaults(defineProps<UiButtonProps>(), {
  type: "button",
});

const emit = defineEmits<UiButtonEmits>();

const onClick = (event: MouseEvent) => {
  if (props.loading || props.disabled) {
    event.preventDefault();
    event.stopPropagation();
    return;
  }
  emit("click", event);
};
</script>

<template>
  <button
    :type="type"
    :class="[
      $style.root,
      disabled && $style.disabled,
      loading && $style.loading,
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <span :class="$style.label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </button>
</template>

<style lang="scss" module>
@import "@/shared/ui/assets/utils";

:root {
  --button--text: #fff;
  --button--background: #d25ede;
  --button--shadow: rgba(244, 144, 255, 0.3);
}

.root {
  display: flex;
  align-items: center;

  background: var(--button--background);
  color: var(--button--text);

  border-radius: rm(6);
  padding: rm(6) rm(10);

  &:focus-visible {
    box-shadow: 0 0 0 rm(2) var(--button--shadow);
  }

  &:not(.disabled) {
    cursor: pointer;
  }

  &.loading {
    opacity: 0.7;
    .label {
      opacity: 0.4;
    }
  }
}

.disabled {
  filter: grayscale(1);
}
</style>
