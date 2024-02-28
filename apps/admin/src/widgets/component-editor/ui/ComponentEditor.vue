<template>
  <RichForm v-model="model" :mutate="mutate">
    <UiComponentEditor>
      <Preview v-bind="model" />
      <template #submit>
        <RichSubmit>
          <UiButton :label="t('componentEditor.submit')" />
        </RichSubmit>
      </template>
      <template #style>
        <RichField name="style">
          <UiTextarea
            :placeholder="t('componentEditor.field.style.placeholder')"
          />
        </RichField>
      </template>
      <template #script>
        <RichField name="script">
          <UiTextarea
            :placeholder="t('componentEditor.field.script.placeholder')"
          />
        </RichField>
      </template>
      <template #template>
        <RichField name="template">
          <UiTextarea
            :placeholder="t('componentEditor.field.template.placeholder')"
          />
        </RichField>
      </template>
      <template #binding>
        <RichField name="payload">
          <UiTextarea
            :rows="6"
            :placeholder="t('componentEditor.field.payload.placeholder')"
          />
        </RichField>
      </template>
    </UiComponentEditor>
  </RichForm>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { UpdateBindingInput, UpdateTemplateInput } from "@vueadmin/backend";
import { useI18n } from "vue-i18n";
import { UiButton, UiComponentEditor, UiTextarea } from "@/shared/ui";
import { ComponentEditorProps } from "./ComponentEditorProps.ts";
import { RichForm, RichField, RichSubmit } from "@/features/form";
import Preview from "@/entity/preview/ui/Preview.vue";
import { useUpdateBinding, useUpdateTemplate } from "@/shared/api";

const { t } = useI18n();

const props = defineProps<ComponentEditorProps>();

const model = ref<Omit<UpdateBindingInput & UpdateTemplateInput, "id">>({
  payload: "",
  template: "",
  style: "",
  script: "",
});

watchEffect(() => {
  model.value = {
    payload:
      props.binding?.payload ?? JSON.stringify({ count: 2, multiplier: 6 }),
    template:
      props.template?.template ??
      '<div class="red">Hello, {{count * multiplier}}</div>',
    style:
      props.template?.style ??
      `.red {
  color: red;
}`,
    script:
      props.template?.script ??
      `
import {watchEffect, onMounted} from "vue";

const props = defineProps<{
  count: number;
  multiplier: number;
}>();

watchEffect(() => {
  console.log(props.count);
})
    `,
  };
});

const { mutate: updateBinding } = useUpdateBinding();
const { mutate: updateTemplate } = useUpdateTemplate();

const mutate = async () => {
  await Promise.all([updateBinding(model.value), updateTemplate(model.value)]);

  alert("Saved");
};
</script>
