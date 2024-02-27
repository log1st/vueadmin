<template>
  <UiIndexPage :title="t('title')">
    <UiCard>
      <ComponentEditor :model-value="data" />
    </UiCard>
  </UiIndexPage>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ComponentEditor } from "@/widgets/component-editor";
import { UiCard, UiIndexPage } from "@/shared/ui";
import { useBinding } from "@/shared/api";

const { t } = useI18n();

const { data } = useBinding();
</script>
