import { useQuery } from "@tanstack/vue-query";
import { trpcClient } from "@/shared/api";

const fetchBinding = () => trpcClient.binding.query();

export const useBinding = () =>
  useQuery({
    queryKey: ["binding"],
    queryFn: fetchBinding,
  });
