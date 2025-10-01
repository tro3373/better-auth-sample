import { betterAuth } from 'better-auth';
import { nextCookies } from 'better-auth/next-js';
import { twoFactor } from 'better-auth/plugins';
import { passkey } from 'better-auth/plugins/passkey';

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  plugins: [twoFactor(), passkey(), nextCookies()],
});
