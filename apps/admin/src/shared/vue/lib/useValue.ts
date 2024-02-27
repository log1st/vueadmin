import { computed, isRef, MaybeRef, Ref, ref } from "vue";

export const useValue = <
  Props extends Record<string, unknown>,
  Field extends keyof Props & string,
  Emit extends {
    (e: `update:${Field}`, value: Props[Field]): void;
  },
>(
  props: Props,
  field: MaybeRef<Field>,
  emit: Emit,
) => {
  const fieldRef = ref(isRef(field) ? field.value : field) as Ref<Field>;

  const value = computed({
    get() {
      return props[fieldRef.value];
    },
    set(newValue) {
      emit(`update:${fieldRef.value}`, newValue);
    },
  });

  return [value] as const;
};
