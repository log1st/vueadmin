export type UiTextareaProps = {
  modelValue?: string;
  name?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
};

export type UiTextareaEmits = {
  (e: "update:modelValue", value?: string): void;
};
