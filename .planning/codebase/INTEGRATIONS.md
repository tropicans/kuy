# External Integrations

**Analysis Date:** 2026-09-12

## APIs & External Services

**Fonts & Typography:**
- Google Fonts (`Geist`, `Geist Mono`) - High-clarity neo-grotesque display and tabular monospace typography
  - SDK/Client: Built-in `next/font/google` (`src/app/layout.tsx`)
  - Auth: None (downloaded and self-hosted automatically at build time by Next.js)

**AI & Image Generation Services:**
- Currently simulated / Mocked client-side (`src/app/page.tsx` via `handleGenerate` and `setTimeout`)
  - SDK/Client: None installed (no OpenAI, Replicate, Fal.ai, or Hugging Face client)
  - Auth: None configured
  - Status: Latent model seed randomization (`setPromptSeed`) and variation selection operate entirely in-browser without external network calls

## Data Storage

**Databases:**
- None detected / Not implemented
  - Connection: None
  - Client: None (no Prisma, Drizzle, TypeORM, or SQLite client installed)

**File Storage:**
- Local filesystem only (`public/` directory)
  - Pre-rendered sequence frames: `public/frames/ezgif-frame-001.png` to `ezgif-frame-050.png`
  - Bento grid and UI media assets: `public/images/` (`bento-stage.jpg`, `bento-team.jpg`, `bento-dancer.jpg`, `bento-cert.jpg`, `card-preview.jpg`)
  - Brand and vector icons: `public/*.svg`

**Caching:**
- Next.js internal build/static cache (`.next/cache/`)
- No external Redis, Memcached, or CDN edge cache configured

## Authentication & Identity

**Auth Provider:**
- None / Custom UI mock
  - Implementation: Pure presentation layer; no session tokens, cookies, JWT verification, or user databases configured

## Monitoring & Observability

**Error Tracking:**
- None detected (no Sentry, Datadog, or LogRocket configured)

**Logs:**
- Standard Next.js server stdout/stderr console logging in Docker container runner (`CMD ["node", "server.js"]` in `Dockerfile`)

## CI/CD & Deployment

**Hosting:**
- Self-hosted Docker container environment (`Dockerfile`, `docker-compose.yml`)
- Standalone Node.js server listening on `http://0.0.0.0:3174`

**CI Pipeline:**
- None configured in repository (no `.github/workflows/` or GitLab CI configuration found)
- Local Docker builds validated via `docker-compose.yml`

## Environment Configuration

**Required env vars:**
- `PORT` - Port for Next.js standalone server (defaults to `3174`)
- `HOSTNAME` - Host binding interface (set to `0.0.0.0` for container networking)
- `NODE_ENV` - Runtime environment mode (`production`)
- `NEXT_TELEMETRY_DISABLED` - Telemetry toggle (`1` disables telemetry)

**Secrets location:**
- No secrets currently in use; all configuration passed via container environment definitions

## Webhooks & Callbacks

**Incoming:**
- None (no API route handlers defined in `src/app/api/`)

**Outgoing:**
- None (no outbound webhook dispatches or notification webhooks)

---

*Integration audit: 2026-09-12*
