<script setup lang="ts">
import { UiTitle } from '../../elements';
import { UiIndexPageProps } from './UiIndexPageProps';

defineProps<UiIndexPageProps>();
</script>

<template>
  <div :class="$style.root">
    <UiTitle :class="$style.title">
      <slot name="title">
        {{ title }}
      </slot>
    </UiTitle>
    <div :class="$style.body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" module>
  @import "@/shared/ui/assets/utils";

  .root {
    display: flex;
    flex-direction: column;
    gap: rm(10);

    flex-grow: 1;

    inline-size: 100%;
    max-inline-size: rm(1170);
    margin: 0 auto;
  }

  .title {
    align-self: flex-start;
  }

  .body {
    flex-grow: 1;

    display: flex;

    > * {
      flex-grow: 1;
    }
  }
</style>
