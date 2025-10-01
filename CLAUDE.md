# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 15.5.4 application with Better Auth authentication system using Turso database. Includes two-factor authentication and passkey support.

**Stack:**
- Next.js 15.5.4 (with Turbopack)
- Better Auth 1.3.24 (authentication framework)
- Zod 4.1.11 (schema validation)
- @t3-oss/env-nextjs (type-safe environment variables)
- Turso (database)

## Essential Commands

```bash
# Development server (uses Turbopack for fast refresh)
pnpm dev

# Build production
pnpm build --turbopack

# Start production server
pnpm start

# Format and lint code (auto-fix)
pnpm checkfix
# This runs: biome check --write --unsafe
```

## Architecture

### Project Structure
```
src/
├── app/           # Next.js App Router pages
├── lib/           # Shared utilities and configurations
│   └── auth/      # Better Auth configuration
│       ├── auth.ts         # Server-side auth instance
│       └── auth-client.ts  # Client-side auth instance
└── env.ts         # Type-safe environment variables (zod validation)
```

### Authentication Architecture

**Server-side (`src/lib/auth/auth.ts`):**
- Better Auth instance with email/password authentication
- Plugins: Two-factor authentication, Passkey, Next.js cookies

**Client-side (`src/lib/auth/auth-client.ts`):**
- React auth client configured with same plugins
- Uses environment variable `NEXT_PUBLIC_APP_URL` for base URL

### Environment Variables

Managed via `src/env.ts` with Zod validation:

**Server variables:**
- `BETTER_AUTH_SECRET` - Secret key for auth
- `BETTER_AUTH_URL` - Auth service URL

**Client variables:**
- `NEXT_PUBLIC_APP_URL` - Public app URL

Add new environment variables to both the Zod schema and `runtimeEnv` object in `src/env.ts`.

## Code Standards

### Biome Configuration
- Line width: 80 characters
- Single quotes, semicolons required
- Indent: 2 spaces
- Auto-organize imports enabled
- Console statements allowed
- Unused variables: warn (not error)
- shadcn/ui components ignored from linting

### TypeScript Configuration
- Path alias: `@/*` → `./src/*`
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler

## Development Notes

### Running with Turbopack
All build and dev commands use `--turbopack` flag for faster development experience. This is the default configuration.

### Adding Environment Variables
1. Add to Zod schema in `src/env.ts`
2. Add to `runtimeEnv` mapping
3. Add to `.env` file
4. Restart dev server

### Better Auth Plugins
When adding Better Auth plugins:
1. Add plugin to `src/lib/auth/auth.ts` (server)
2. Add corresponding client plugin to `src/lib/auth/auth-client.ts`
3. Ensure plugin configuration matches between server/client

## Known Issues

**Typo in `src/lib/auth/auth-client.ts`:**
- Line 4: `createAuthClinet` should be `createAuthClient`
- Line 6: `crateAuthCliennt` should be `createAuthClient`
- Line 8: `twoFactorClinet` should be `twoFactorClient`

These typos will cause runtime errors and should be fixed.
