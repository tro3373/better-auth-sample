import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';
import { env } from '@/env';

config({ path: '.env' });

export const db = drizzle({
  connection: {
    url: env.TURSO_CONNECTION_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
});
