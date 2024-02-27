<script setup lang="ts">
import { UiRootLayoutProps } from './UiRootLayoutProps';

defineProps<UiRootLayoutProps>();
</script>

<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<style lang="scss" module>
@import "@/shared/ui/assets/utils";
@import "@/shared/ui/assets/drop";

.root {
  display: flex;
  flex-direction: column;
  min-block-size: 100dvh;

  background-image: paint(dot-grid);
  --dot-size: #{rm(1)};
  --dot-spacing: #{rm(8)};
  --dot-color: #c7c7c7;
}
</style>
