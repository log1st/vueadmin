import { useQuery } from "@tanstack/vue-query";
import { trpcClient } from "@/shared/api";

export const templateTag = ["template"];
export const useTemplate = () =>
  useQuery({
    queryKey: templateTag,
    queryFn: () => trpcClient.template.query(),
  });
