import manifest from './image-manifest.json';

// Every photo slot on the site. A slot renders only when its `file` has been processed
// into public/images/ by `pnpm images` (see PHOTOGRAPHY.md for the shot list and README.md
// for the workflow). Until then the slot is skipped and the layout closes up around it, so
// pages never show a broken image or a fake placeholder.
//
// To add a real photo: drop `<file>.jpg` (or .png/.webp) into photos/, run `pnpm images`,
// then update the alt text and remove the illustrative caption here.

export type Ratio = '4:5' | '3:2' | '16:9';

export type ImageSlot = {
  file: string; // base name, e.g. 'stephanie-portrait' -> public/images/stephanie-portrait-<w>.webp
  alt: string;
  ratio: Ratio;
  caption?: string; // shown under the image; use it to label illustrative studies, drop it for real photos
};

type ManifestEntry = { width: number; height: number; widths: number[] };
const entries = manifest as Record<string, ManifestEntry>;

export const slots = {
  // --- Currently illustrative (AI-generated editorial studies, not documentary photos) ---
  'home-hero':        { file: 'horse',   ratio: '4:5', alt: 'Editorial study of a bay horse in soft forest light.', caption: 'Illustrative study · The equine athlete' },
  'equine-hero':      { file: 'horse',   ratio: '4:5', alt: 'Editorial study of a bay horse in soft forest light.', caption: 'Illustrative study · The equine athlete' },
  'pilates-hero':     { file: 'pilates', ratio: '4:5', alt: 'Editorial still life of a Pilates ring in natural light.', caption: 'Illustrative study · Movement & materials' },
  'studio-feature':   { file: 'pilates', ratio: '4:5', alt: 'Editorial still life of a Pilates ring in natural light.', caption: 'Illustrative study · Movement & materials' },

  // --- Waiting on real photography (hidden until the file exists) ---
  'stephanie-portrait':      { file: 'stephanie-portrait',      ratio: '4:5',  alt: 'Stephanie Kopacek, founder of Form + Field.' },
  'stephanie-teaching':      { file: 'stephanie-teaching',      ratio: '3:2',  alt: 'Stephanie guiding a client through a reformer exercise.' },
  'reformer-detail':         { file: 'reformer-detail',         ratio: '4:5',  alt: 'Detail of the Balanced Body Allegro reformer in the studio.' },
  'studio-wide':             { file: 'studio-wide',             ratio: '16:9', alt: 'The private Pilates studio in Larkspur, Colorado.' },
  'stephanie-equine':        { file: 'stephanie-equine',        ratio: '3:2',  alt: 'Stephanie working quietly with a horse.' },
  'bodywork-detail':         { file: 'bodywork-detail',         ratio: '4:5',  alt: 'Hands resting on a horse’s shoulder during bodywork.' },
  'rider-in-saddle':         { file: 'rider-in-saddle',         ratio: '3:2',  alt: 'Horse and rider moving together in profile.' },
  'horse-rider-connection':  { file: 'horse-rider-connection',  ratio: '4:5',  alt: 'A quiet moment between horse and rider.' },
  'property-landscape':      { file: 'property-landscape',      ratio: '16:9', alt: 'The Colorado property setting around the studio.' },
} satisfies Record<string, ImageSlot>;

export type SlotName = keyof typeof slots;

export const ratioCss: Record<Ratio, string> = { '4:5': '4 / 5', '3:2': '3 / 2', '16:9': '16 / 9' };

/** Resolved image data for a slot, or null when the photo has not been supplied yet. */
export function resolveSlot(name: SlotName) {
  const slot: ImageSlot = slots[name];
  const meta = entries[slot.file];
  if (!meta) return null;
  const widths = [...meta.widths].sort((a, b) => a - b);
  const largest = widths[widths.length - 1];
  const src = `images/${slot.file}-${largest}.webp`;
  const srcset = widths.map(w => `images/${slot.file}-${w}.webp ${w}w`);
  return { ...slot, src, srcset, width: meta.width, height: meta.height };
}
