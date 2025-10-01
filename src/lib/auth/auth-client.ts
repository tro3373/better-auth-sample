import { createAuthClient } from 'better-auth/react';
import { passkeyClient, twoFactorClient } from 'better-auth/client/plugins';
import { env } from '@/env';

export const authClient = createAuthClient({
  baseURL: env.NEXT_PUBLIC_APP_URL,
  plugins: [twoFactorClient(), passkeyClient()],
});
