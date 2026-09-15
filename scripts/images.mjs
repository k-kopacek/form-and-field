// Converts original photos in photos/ into responsive WebP files in public/images/
// and records their dimensions in src/data/image-manifest.json.
//
//   pnpm images            process every photo in photos/
//   pnpm images portrait   process only files whose name contains "portrait"
//
// File names must match the `file` value of a slot in src/data/images.ts
// (e.g. photos/stephanie-portrait.jpg). Originals are never modified and photos/ is git-ignored.

import { readdir, mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';
import sharp from 'sharp';

const SRC = 'photos';
const OUT = 'public/images';
const MANIFEST = 'src/data/image-manifest.json';
const WIDTHS = [640, 1122, 1800];
const QUALITY = 78;
const filter = process.argv[2] ?? '';

await mkdir(OUT, { recursive: true });
let files;
try { files = (await readdir(SRC)).filter(f => /\.(jpe?g|png|webp|tiff?)$/i.test(f) && f.includes(filter)); }
catch { console.error(`No ${SRC}/ folder found. Create it and add photos named after the slots in src/data/images.ts.`); process.exit(1); }
if (!files.length) { console.log('Nothing to process.'); process.exit(0); }

const manifest = JSON.parse(await readFile(MANIFEST, 'utf8'));

for (const file of files) {
  const name = basename(file, extname(file)).toLowerCase().replace(/[^a-z0-9-]+/g, '-');
  const input = sharp(join(SRC, file)).rotate(); // honour EXIF orientation
  const { width, height } = await input.metadata();
  const widths = WIDTHS.filter(w => w <= width);
  if (!widths.length) widths.push(width);
  for (const w of widths) {
    await input.clone().resize({ width: w, withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(join(OUT, `${name}-${w}.webp`));
  }
  const largest = Math.max(...widths);
  manifest[name] = { width: largest, height: Math.round((height / width) * largest), widths };
  console.log(`${file} -> ${name}-{${widths.join(',')}}.webp  (${width}×${height})`);
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Updated ${MANIFEST}. Now set alt text for the new slots in src/data/images.ts if you have not already.`);
