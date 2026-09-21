# RAYBUILD GROUP

Production-ready Next.js/React/TypeScript foundation for RAYBUILD GROUP with shared architecture for Raybuild Solar and Raybuild Construction.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

## Central configuration

Edit `config/site.ts`, `content/company.ts`, `content/solar.ts`, and `content/construction.ts`.

## Environment

Copy `.env.example` to `.env.local`. Never commit credentials.

## Lead API

`POST /api/leads` validates the lead request server-side. Connect the production implementation to the approved database and transactional email provider using server-only environment variables.

## Images

Replace assets in `public/images/solar`, `public/images/construction`, `public/images/projects`, and `public/images/common` with approved client assets.

## Domain setup

The same component system supports `/solar` and `/construction` locally and can later be mapped to separate domains/subdomains through deployment configuration or host-based middleware.

## SEO

Includes Next.js metadata foundation, `sitemap.ts`, `robots.ts`, semantic route structure, and placeholder-safe content.

## Before launch

Replace every pending placeholder, verify phone/email/WhatsApp/maps/social URLs, connect database/email, add approved project content and imagery, then run a full responsive/accessibility/build test.
