export type RichFormProps<Entity = unknown> = {
  modelValue?: Entity;
  mutate?(payload: Entity): Promise<unknown> | void;
};

export type RichFormEmits<Entity = unknown> = {
  (e: "update:modelValue", value?: Entity): void;
};
