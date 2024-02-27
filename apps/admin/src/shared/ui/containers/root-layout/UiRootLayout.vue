<script setup lang="ts">
import { ref } from "vue";
import { UiRootLayoutProps } from "./UiRootLayoutProps";

defineProps<UiRootLayoutProps>();

const dots = ref();
</script>

<template>
  <div :class="[$style.root, dots && $style.withDots]">
    <button :class="$style.dots" @click="dots = !dots">
      {{ dots ? "Hide dots" : "Show dots" }}
    </button>
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
  padding: rm(100) rm(40);

  font:
    400 16px Inter,
    sans-serif;
}

.dots {
  position: fixed;
  inset: rm(10) rm(10) auto auto;
  cursor: pointer;
  background: #efefef;
  padding: rm(10);
}

.withDots {
  background-image: paint(dot-grid);
  --dot-size: #{rm(1)};
  --dot-spacing: #{rm(8)};
  --dot-color: #c7c7c7;
}
</style>
