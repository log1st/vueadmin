import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "@vueadmin/backend";
import superjson from "superjson";
import { apiUrl } from "@/shared/env";

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: apiUrl,
      transformer: superjson,
    }),
  ],
});
