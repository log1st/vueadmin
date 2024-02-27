import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { apiUrl } from '@/shared/env';

export const trpcClient = createTRPCProxyClient({
  links: [httpBatchLink({
    url: apiUrl,
  })],
});
