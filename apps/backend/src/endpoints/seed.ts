import { trpc } from "../trpc.ts";

export const seed = trpc.procedure.query(async ({ ctx }) => {
  await ctx.prisma.template.create({
    data: {
      template: '<div class="red">Hello, {{ count * multiplier }}</div>',
      script: `import {watchEffect, onMounted} from "vue";

const props = defineProps<{
  count: number;
  multiplier: number;
}>();

watchEffect(() => {
  console.log(props.count);
})`,
      style: `.red {
  color: red;
}`,
    },
  });

  await ctx.prisma.binding.create({
    data: {
      payload: JSON.stringify({
        count: 2,
        multiplier: 4,
      }),
    },
  });

  return true;
});
