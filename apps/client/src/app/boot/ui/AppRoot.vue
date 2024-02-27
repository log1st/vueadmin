<template>
  <template v-if="binding && template">
    <Preview
      :style="template.style"
      :template="template.template"
      :payload="binding.payload"
    />
  </template>
  <template v-else> Loading... </template>
</template>

<script setup lang="ts">
import { useBinding, useTemplate } from "@/shared/api";
import { Preview } from "@/entities/preview";

const { data: binding } = useBinding();
const { data: template } = useTemplate();
</script>
