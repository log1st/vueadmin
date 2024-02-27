import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { templateTag, trpcClient } from "@/shared/api";

export const useUpdateTemplate = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: trpcClient.updateTemplate.mutate,
    onSuccess() {
      client.invalidateQueries({
        queryKey: templateTag,
      });
    },
  });
};
