<template>
  <UiIndexPage :title="t('title')">
    <UiCard>
      <ComponentEditor
        :binding="binding"
        :template="template"
        :loading="isLoadingBinding || isLoadingTemplate"
      />
    </UiCard>
  </UiIndexPage>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ComponentEditor } from "@/widgets/component-editor";
import { UiCard, UiIndexPage } from "@/shared/ui";
import { useBinding, useTemplate } from "@/shared/api";

const { t } = useI18n();

const { data: binding, isLoading: isLoadingBinding } = useBinding();
const { data: template, isLoading: isLoadingTemplate } = useTemplate();
</script>
