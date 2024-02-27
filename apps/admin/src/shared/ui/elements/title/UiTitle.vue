<script setup lang="ts">
import { UiTitleProps } from './UiTitleProps';

defineProps<UiTitleProps>();
</script>

<template>
  <div :class="$style.root">
    <slot>
      {{ title }}
    </slot>
  </div>
</template>

<style lang="scss" module>
  @import "@/shared/ui/assets/utils";

  :root {
    --title--background: #d9d9d9;
    --title--border: #a4a4a4;
    --title--color: #000000;
  }

  .root {
    display: flex;
    align-items: center;

    padding: rm(2) rm(6);
    border-radius: rm(6);

    background: var(--title--background);
    box-shadow: 0 0 0 rm(1) var(--title--border);
    color: var(--title--color);

    @include text-label();
  }
</style>
