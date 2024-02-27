import { inject, InjectionKey, ref, Ref } from "vue";

export type DataIndex = string | number | Array<string | number>;

export type RichFormContext = {
  getFieldValue<Field extends DataIndex, Value>(field: Field): Value;
  setFieldValue<Field extends DataIndex, Value>(
    field: Field,
    Value: Value,
  ): void;
  submitting: Ref<boolean>;
};

export const richFormContextInjectionKey: InjectionKey<RichFormContext> =
  Symbol("richForm");

export const useRichFormContext = () =>
  inject(
    richFormContextInjectionKey,
    () => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getFieldValue: () => null as any,
      setFieldValue: () => {},
      submitting: ref(false),
    }),
    true,
  );
