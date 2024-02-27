<script setup lang="ts"></script>

<template>
  <div :class="$style.root">
    <slot />
  </div>
</template>

<style lang="scss" module>
@import "@/shared/ui/assets/utils";

:root {
  --card--background: rgba(224, 224, 224, 0.7);
  --card--border: #d3d3d3;
}

.root {
  padding: rm(10);
  border-radius: rm(6);

  background: var(--card--background);
  box-shadow: 0 0 0 rm(1) var(--card--border);
}
</style>
