import type { APIRoute } from 'astro';
import { isLive, asset } from '../data/site';
export const GET: APIRoute = ({ site }) => new Response('User-agent: *\n' + (isLive ? 'Allow: /\n' : 'Disallow: /\n') + (site && isLive ? 'Sitemap: ' + new URL(asset('sitemap.xml'), site).href + '\n' : ''), { headers: { 'Content-Type': 'text/plain' } });
