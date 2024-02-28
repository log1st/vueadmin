<template>
  <div class="red">Hello, {{ count * multiplier }}</div>
</template>

<script lang="ts" setup>
import { watchEffect } from "vue";

const props = defineProps<{
  count: number;
  multiplier: number;
}>();

watchEffect(() => {
  console.log(props.count);
});
</script>

<style scoped>
.red {
  color: red;
}
</style>
