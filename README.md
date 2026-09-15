# Form + Field

Static brochure site for Stephanie Kopacek's private Pilates, equine bodywork, and Horse + Rider practice in Larkspur, Colorado. Built with [Astro](https://astro.build) (static output, no client framework), self-hosted fonts, no analytics or third-party embeds by default.

## Run it locally

```bash
pnpm install
pnpm dev        # http://127.0.0.1:4321
pnpm check      # type-check the .astro files
pnpm build      # static output in dist/
pnpm preview    # serve dist/ locally
```

Copy `.env.example` to `.env` to try booking links, contact details, or a base path locally. Every setting is optional; the site renders honestly without them.

## Where things live

| What | Where |
| --- | --- |
| Business name, founder, location, navigation, contact, booking config | `src/data/site.ts` |
| Services and prices | `src/data/services.ts` |
| FAQ copy | `src/data/faq.ts` |
| Photo slots, alt text, captions | `src/data/images.ts` |
| Legal entity, policy dates, refund terms, data processors | `src/data/legal.ts` |
| Policy pages | `src/pages/privacy.astro`, `terms.astro`, `refunds.astro`, `cookies.astro` |
| Page copy | `src/pages/*.astro` |
| Shared layout, header, footer, SEO tags, LocalBusiness schema | `src/layouts/Layout.astro` |
| All styling (one file, CSS layers) | `src/styles/global.css` |

Prices and policy text are pulled from the data files, so changing a price in `services.ts` updates every page at once.

## Booking with Square Appointments

1. In Square Dashboard, open Appointments > Online Booking and copy the public booking link.
2. Set it as `PUBLIC_BOOKING_URL`. Every "Book a session" button on the site now opens it in a new tab, and the Book page swaps its "scheduling is being prepared" notice for a "Continue to booking" button.
3. Optional: to show Square's calendar inline on `/book/`, copy the `src` of the `<script>` tag from Online Booking > Embed and set it as `PUBLIC_BOOKING_EMBED_SRC`. Only `square.site` widget URLs are accepted.
4. Set `PUBLIC_CONTACT_EMAIL` (and optionally `PUBLIC_CONTACT_PHONE`, `PUBLIC_CONTACT_INSTAGRAM`) so the footer and Book page show a way to reach Stephanie. Empty values are simply not rendered.

If Square is connected to Google Calendar in Square's own settings, availability stays in sync there; the website does not need to know about Google Calendar.

## Adding real photos

The site has named photo slots (see the table in `PHOTOGRAPHY.md` for the shot list and what each is for). A slot renders only when its image exists, so pages look finished with or without photos.

1. Save the original as `photos/<slot-file>.jpg` (for example `photos/stephanie-portrait.jpg`, `photos/studio-wide.jpg`). Slot file names are the `file` values in `src/data/images.ts`.
2. Run `pnpm images`. This writes responsive WebP files (640 / 1122 / 1800 px wide) into `public/images/` and records the dimensions in `src/data/image-manifest.json`.
3. In `src/data/images.ts`, write real alt text for the slot. When a documentary photo replaces one of the AI-generated studies (`horse`, `pilates`), also delete its `caption` line so the "Illustrative study" label disappears.
4. Commit the generated files in `public/images/` and the manifest. Originals in `photos/` are git-ignored.

Slots currently waiting on photos: `stephanie-portrait` (About), `reformer-detail` and `stephanie-teaching` (Pilates), `bodywork-detail` and `stephanie-equine` (Equine), `rider-in-saddle` and `horse-rider-connection` (Horse + Rider), `studio-wide` and `property-landscape` (Studio).

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

1. Push the project to a GitHub repository.
2. Repo Settings > Pages > Build and deployment > Source: **GitHub Actions**.
3. Repo Settings > Secrets and variables > Actions > **Variables** tab. Add:
   - `PUBLIC_SITE_URL` = `https://<username>.github.io` and `BASE_PATH` = `/<repo-name>` for a project site, or `PUBLIC_SITE_URL` = `https://www.yourdomain.com` and `BASE_PATH` = `/` once a custom domain is attached.
   - `PUBLIC_BOOKING_URL`, `PUBLIC_CONTACT_EMAIL`, and the other optional values from `.env.example`.
   - `PUBLIC_SITE_LIVE` = `true` only when the content in `CONTENT-TODO.md` has been signed off. Until then every page carries `noindex` so the preview does not get indexed by search engines.
4. Push to `main` (or run the workflow manually from the Actions tab).

For a custom domain, add it under Settings > Pages and create the CNAME/A records at the registrar; GitHub provisions HTTPS automatically. Netlify or Cloudflare Pages also work with no changes: build command `pnpm build`, output `dist`, same environment variables.

## Before launch

Read `LEGAL-REVIEW.md` first. 
Work through `CONTENT-TODO.md`. The items that matter most: confirm the business name and domain, Stephanie's bio and credential wording, the provisional equine and Horse + Rider prices, the cancellation policy, and replace the two illustrative images.
