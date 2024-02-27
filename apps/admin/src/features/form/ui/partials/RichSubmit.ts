import { defineComponent, h, useSlots, VNode } from "vue";
import { useRichFormContext } from "../../lib/RichFormContext.ts";

export const RichSubmit = defineComponent({
  name: "RichSubmit",
  setup() {
    const { submitting } = useRichFormContext();
    const slots = useSlots();

    return () => {
      const [node] = slots.default?.() || [];

      return h(node.type as VNode, {
        ...node.props,
        loading: submitting.value,
        type: "submit",
      });
    };
  },
});
