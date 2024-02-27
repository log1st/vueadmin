import { defineComponent, h, PropType, VNode } from "vue";
import { DataIndex, useRichFormContext } from "../../lib/RichFormContext.ts";

export const RichField = defineComponent({
  name: "RichField",
  props: {
    name: {
      type: [String, Array] as PropType<DataIndex>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const { getFieldValue, setFieldValue, submitting } = useRichFormContext();

    return () => {
      const [node] = slots.default?.() || [];

      return h(node.type as VNode, {
        ...node.props,
        modelValue: getFieldValue(props.name),
        "onUpdate:modelValue": (newValue: unknown) => {
          setFieldValue(props.name, newValue);
        },
        disabled: submitting.value,
      });
    };
  },
});
