<template>
  <div :class="$style.root">
    <div :class="$style.data">
      {{ modelValue }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ComponentEditorProps } from "./ComponentEditorProps.ts";

defineProps<ComponentEditorProps>();
</script>

<style module lang="scss">
.root {
}
</style>
