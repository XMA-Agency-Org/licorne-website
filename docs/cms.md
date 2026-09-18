# Sanity CMS

Versions: `next` 16.3, `sanity` 6.15, `@sanity/vision` 6.15, `groq` 6.15, `next-sanity` 13.3, `@sanity/image-url` 2.1. Sanity 6 requires React ≥19.2.2, so React/ReactDOM are on 19.3.

## Studio

The Sanity Studio is embedded in the Next.js app at **`/studio`**.

- Local: http://localhost:3000/studio
- Production: `https://<domain>/studio`

Files:

| Path | Purpose |
| --- | --- |
| `sanity.config.ts` | Studio config (`defineConfig`) — schema, structure, Vision plugin, `basePath: /studio` |
| `sanity.cli.ts` | CLI config so `bunx sanity <cmd>` targets the right project/dataset |
| `sanity/env.ts` | Single source for project id, dataset, api version, studio base path |
| `sanity/schemas/` | Schema types (`objects/`, `documents/`, `singletons/`) exported from `index.ts` |
| `sanity/structure.ts` | Desk structure — singletons pinned at top, then document lists |
| `sanity/lib/client.ts` | `next-sanity` client (stega pointed at `/studio`) |
| `sanity/lib/image.ts` | `urlFor()` image builder |
| `sanity/lib/queries.ts` | GROQ queries |
| `app/(studio)/studio/[[...tool]]/page.tsx` | Studio route rendering `NextStudio` |

## Route groups

`app/` is split into two route groups so the studio doesn't inherit the site chrome:

- `app/(site)/` — all public pages; its `layout.tsx` renders `Header`/`Footer`
- `app/(studio)/` — the studio; bare `layout.tsx`
- `app/layout.tsx` — root: fonts, globals, `<html>`/`<body>` only

Imports into `app/services/...` now use `@/app/(site)/services/...`.

## Environment

`.env.local`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=   # from sanity.io/manage
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-29
SANITY_API_TOKEN=                # editor/viewer token for server-side reads
SANITY_REVALIDATE_SECRET=        # shared secret for the revalidate webhook
```

## Setup steps (once)

1. Create a project at https://www.sanity.io/manage and copy the project id into `.env.local`.
2. Add `http://localhost:3000` and the production origin under **API → CORS origins** (with credentials).
3. `bun run dev` → open `/studio` and log in.
4. Optional: `bunx sanity schema deploy` / `bunx sanity typegen generate` via `sanity.cli.ts`.
