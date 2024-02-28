import { computed, Ref } from "vue";
import { DataIndex, useRichFormContext } from "@/features/form";

export const useField = (field: Ref<DataIndex>) => {
  const { getFieldValue, setFieldValue } = useRichFormContext();

  const value = computed({
    get() {
      return getFieldValue(field.value);
    },
    set(newValue) {
      setFieldValue(field.value, newValue);
    },
  });

  return {
    value,
  };
};
