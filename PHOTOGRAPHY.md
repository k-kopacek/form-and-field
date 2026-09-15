# Photography direction and shot list

## Direction

Natural daylight, warm wood, linen, leather, soft forest tones and honest movement. Quiet and athletic rather than posed fitness advertising. The composition should feel at home beside restrained typography.

No cowboy costumes, horse-head logos, heavy retouching, fake testimonials, exaggerated flexibility, clinical treatment imagery, or invented credentials. Do not reveal the exact residential address or identifiable location details. Obtain permission for recognizable clients and owners’ horses.

Deliver full-resolution originals plus selected, color-consistent crops. Retain room around subjects for responsive cropping. Focus faces and movement inside the central 65%; keep important details clear of caption overlays. Photograph both portrait and landscape variants of key scenes.

## Photographer’s shot list

| Filename | Subject / placement | Orientation & ratio | Recommended minimum | Composition |
| --- | --- | --- | --- | --- |
| stephanie-portrait.jpg | About and founder introduction | Portrait, 4:5 | 2400 × 3000 | Relaxed standing portrait in soft light; simple background, natural expression, no equipment obscuring face. |
| stephanie-teaching.jpg | Pilates approach | Landscape, 3:2 | 3000 × 2000 | Stephanie observing or cueing a real client; full working relationship, hands and body positioning visible. |
| reformer-detail.jpg | Pilates hero | Portrait, 4:5 | 2400 × 3000 | Actual Allegro reformer carriage, springs, footbar or straps; careful crop, equipment physically accurate. |
| studio-wide.jpg | Studio page | Landscape, 16:9 | 3200 × 1800 | Show actual equipment layout and natural light; keep residential/private details out of view. |
| stephanie-equine.jpg | Equine service / founder | Landscape, 3:2 | 3000 × 2000 | Stephanie working quietly with a horse, hands visible, safe setting, owner permission. |
| bodywork-detail.jpg | Equine session detail | Portrait, 4:5 | 2400 × 3000 | Hands resting on shoulder or barrel; light reveals coat and contact, no suggestion of a medical procedure. |
| horse-movement.jpg | Home hero / equine | Portrait, 4:5 plus wide 3:2 | 2400 × 3000; 3000 × 2000 | Healthy sport horse in natural movement; photograph the complete stride without cutting off feet. |
| rider-in-saddle.jpg | Signature page | Landscape, 3:2 | 3000 × 2000 | Horse and rider in profile, helmet and appropriate tack, readable rider position, uncomplicated backdrop. |
| horse-rider-connection.jpg | Signature feature | Portrait, 4:5 | 2400 × 3000 | Rider beside the horse or quiet mounted moment; both bodies visible, unforced interaction. |
| property-landscape.jpg | Studio setting | Wide, 16:9 | 3200 × 1800 | A truthful view of the private setting; no address signs, road identifiers or unrelated luxury facilities. |
| colorado-detail.jpg | Environmental interlude | Landscape, 3:2 | 3000 × 2000 | Pine shade, grasses or local rock; actual property or permissioned nearby environment. |
| materials-detail.jpg | Material transitions | Portrait, 4:5 | 2400 × 3000 | Close study of real leather, wood, linen and equipment. Restrained tones and directional daylight. |

## Current illustrative assets

The two in-page assets were generated with the built-in image-generation tool as temporary editorial studies. They are not documentary photographs of Stephanie, her horse, her equipment or her property.

- public/images/horse-1122.webp and horse-640.webp: a dark bay horse in pine-filtered light.
- public/images/pilates-1122.webp and pilates-640.webp: an unbranded Pilates ring on linen. The actual equipment inventory does not list this ring; the public caption identifies it as an editorial study.
- Each source is 1122 × 1402. WebP derivatives are 1122 × 1402 and 640 × 800.
- Exact generation prompts are in IMAGE-PROMPTS.md.

## Replacing imagery

The mechanics are now automated: drop originals in `photos/`, run `pnpm images`, then edit alt text in `src/data/images.ts`. Full steps in README.md. The notes below describe the intent.

Use the same filenames and dimensions or update image metadata, dimensions and responsive sizes in src/components/EditorialImage.astro and the home hero. Update the alt text to describe the real image. Remove illustrative captions once documentary photos replace the studies.

Export WebP at a quality appropriate to the photograph; aim for approximately 100–250 KB for the large hero. Supply an approximately 640-pixel-wide mobile alternative. Keep explicit width and height attributes to avoid layout shifts. Lazy-load below-fold images; the main hero loads eagerly.

Portrait and property sections intentionally use typography and factual copy until real photographs are available. Do not substitute a generated portrait of the founder or a fictional ranch.
