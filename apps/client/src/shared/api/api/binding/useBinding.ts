import { useQuery } from "@tanstack/vue-query";
import { trpcClient } from "@/shared/api";

export const bindingTag = ["binding"];

export const useBinding = () =>
  useQuery({
    queryKey: bindingTag,
    queryFn: () => trpcClient.binding.query(),
  });
