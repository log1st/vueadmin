<script setup lang="ts">
  import { UiIndexPageProps } from './UiIndexPageProps';

  defineProps<UiIndexPageProps>();
</script>

<template>
  <div :class="$style.root">
    index
    <slot />
  </div>
</template>

<style lang="scss" module>
  @import "@/shared/ui/assets/utils";

  .root {

  }
</style>
