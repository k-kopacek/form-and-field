import { defineConfig } from 'astro/config';

const origin = process.env.PUBLIC_SITE_URL?.replace(/\/$/, '');
export default defineConfig({
  output: 'static',
  site: origin || undefined,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
