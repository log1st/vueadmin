import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { bindingTag, trpcClient } from "@/shared/api";

export const useUpdateBinding = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: trpcClient.updateBinding.mutate,
    onSuccess() {
      client.invalidateQueries({
        queryKey: bindingTag,
      });
    },
  });
};
