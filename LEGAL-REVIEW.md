# Legal and accessibility review (September 15, 2026)

This is a practical review, not legal advice. Have a Colorado attorney read the Terms, the participation waiver, and the equine sections before the site goes live. Items marked **ACTION** need a human decision or a document the website cannot supply.

## What the site now has

- `/privacy/`, `/terms/`, `/refunds/`, `/cookies/`, linked from every footer and from each other. All legal identity fields live in `src/data/legal.ts`.
- Footer shows the legal entity name, location, and "Not medical or veterinary care" with a link to the Terms.
- Colorado Equine Activity Liability Act warning (C.R.S. 13-21-119) reproduced verbatim on the Equine page, the Horse + Rider page, and in the Terms.
- Health and veterinary disclaimers on every service page and in the Terms.
- Square booking widget loads only after the visitor clicks "Show booking calendar"; nothing from a third party runs by default. A plain link to Square remains for people who prefer not to load it.
- No cookies, analytics, local storage, embedded fonts from third parties, or social widgets. Verified by reading the built HTML.
- No testimonials are shown (the component stays hidden until real, permissioned quotes are added). No fake reviews exist anywhere.
- Accessibility: axe-core (WCAG 2.2 AA + best-practice rules) reports zero violations on all 13 pages at desktop and phone widths. Keyboard: skip link, menu button (Enter opens, Escape closes and returns focus), FAQ accordions, and all links reachable in order. Focus rings pass 3:1 on every background including the dark sections. All text colors pass 4.5:1 (lowest is muted text on sage at 4.96:1). Every image has alt text and explicit dimensions. Links that open a new tab say so to screen readers.

## ACTION items before launch

1. **Legal entity.** `legalName` and `entityType` in `src/data/legal.ts` are placeholders. Register the LLC or trade name with the Colorado Secretary of State, then fill these in. A sole proprietor operating under "Form + Field" needs a Colorado trade-name registration.
2. **Participation agreement / waiver.** The Terms promise a signed agreement before the first session. Have an attorney draft one (Pilates and equine versions, or one combined). Colorado enforces well-drafted releases for adults; releases signed by a parent on behalf of a minor are enforceable only under C.R.S. 13-22-107 with its specific requirements. Square Appointments can attach an intake form, but a wet or e-signed waiver is safer.
3. **Equine warning sign.** C.R.S. 13-21-119(5) also requires the warning to be posted on a sign, letters at least one inch high, at any stable, corral, or arena you own, manage, or control where equine activities happen. The website text does not satisfy the sign requirement. This clearly applies to any Horse + Rider session with mounted or handling instruction; it is prudent for bodywork sessions too.
4. **Animal massage credential (important).** Colorado's Veterinary Practice Act (C.R.S. 12-235-110(1)(f)) lets a non-veterinarian perform animal massage only if they hold a degree or certificate in animal massage from a school approved by Colorado's Division of Private Occupational Schools, an accredited out-of-state school, or an exempt school. Confirm that the Balance Through Movement Method program meets one of those tests. If it does not, "equine bodywork" as offered may fall inside veterinary practice. This is the single biggest regulatory risk on the site; get an answer before advertising equine bodywork for a fee.
5. **Human massage licensing.** Colorado licenses massage therapists (C.R.S. 12-235). Pilates instruction is exercise instruction and is not covered, but do not describe any human session as "bodywork", "massage", or "manual therapy" unless Stephanie holds a Colorado massage license. Current copy uses "bodywork" only for horses. Keep it that way.
6. **Credential wording.** "Balance Through Movement Method certified" and "completing Polestar Pilates education" must stay accurate. Update the About page and `src/data/site.ts` the day the Polestar certification is complete, and remove the "completing" line.
7. **Insurance.** Get professional and general liability insurance that covers both Pilates instruction and equine bodywork (many Pilates policies exclude animals). Ask the insurer what waiver language they require; align the participation agreement with it.
8. **Home studio zoning.** A client-facing business on residential property in unincorporated Douglas County may need a home-occupation permit. Check with Douglas County Planning before advertising the studio address to clients.
9. **Sales tax.** Colorado does not tax services generally, but confirm nothing taxable (retail goods, equipment sales) is sold through Square. Register with the Colorado Department of Revenue if that changes.
10. **Refund terms.** The Refund page implements: 24-hour cancellation, 12-month package validity, 14-day refund window minus used sessions at $95, no-show forfeits. Change the numbers in `src/data/legal.ts` if Stephanie wants different terms; do not leave terms on the site she will not honor. Colorado has no specific statute on service-package expiry, but the Colorado Consumer Protection Act penalizes deceptive terms, so what is published must be what is practiced.
11. **Helmets.** The Horse + Rider page says helmets are required for mounted work. That is a sound safety policy but it was added in this review; confirm Stephanie will enforce it, or remove the sentence.
12. **Business email.** Set `PUBLIC_CONTACT_EMAIL`. Until then the policies point to the Book page, which has no contact method. A business should be reachable somewhere on its own site.
13. **Minors.** The Terms require guardian consent and presence for under-18 clients. Decide whether Stephanie will take minors at all; if not, change section 6 of the Terms to say clients must be 18 or older.

## Laws checked and how they apply

- **Colorado Privacy Act (C.R.S. 6-1-1301).** Applies only to businesses processing personal data of 100,000+ Colorado consumers a year, or 25,000+ while selling data. Not applicable. The Privacy Policy still honors access/correction/deletion voluntarily.
- **GDPR / UK GDPR / CCPA.** Not applicable: a Colorado-only service business not targeting EU/UK residents, far below CCPA thresholds. If EU clients are ever targeted, a consent banner and lawful-basis language would be needed.
- **Cookie consent.** No consent banner is legally required because the site sets no cookies. The Square widget is gated behind a click, which is a consent action. If analytics are ever added, add a consent control first.
- **CAN-SPAM.** Only relevant if marketing email is sent. Square's reminder emails are transactional. If a newsletter is added, include an unsubscribe link and a postal address.
- **ADA Title III.** Applies to places of public accommodation, which includes a fee-charging fitness studio. Courts are split on whether websites alone are covered, but the site now meets WCAG 2.2 AA by automated testing, which is the standard courts and the DOJ reference. Colorado's HB21-1110 accessibility law applies to government entities, not private businesses.
- **Colorado Equine Activity Liability Act (C.R.S. 13-21-119).** Provides immunity from inherent-risk claims for equine professionals and sponsors, conditioned on the warning being posted and included in contracts. Done on the site; sign and contract still required (items 2 and 3).
- **Colorado Veterinary Practice Act (C.R.S. 12-235-110).** See item 4.
- **Massage Therapy Practice Act (C.R.S. 12-235-101 et seq.).** See item 5.
- **Colorado Consumer Protection Act (C.R.S. 6-1-105).** Prohibits deceptive trade practices including unsupported claims and fake reviews. Copy was reviewed; no outcome claims ("fixes", "cures", "improves posture") appear. Keep it that way when editing.
- **FTC Endorsement Guides.** No testimonials shown. When real ones are added, use only genuine, permissioned quotes, and disclose any free sessions given in exchange.

## Images and fonts (copyright)

- `horse-*.webp` and `pilates-*.webp` were generated by ChatGPT's image tool for this project (prompts in `IMAGE-PROMPTS.md`). OpenAI's terms assign output rights to the user, so there is no third-party copyright claim to worry about. Note the reverse risk: purely AI-generated images are not copyrightable in the US, so others can reuse them freely. Both are captioned "Illustrative study" so they do not misrepresent the studio, the horse, or the property.
- `favicon.svg` was drawn for this project.
- Fonts: Cormorant Garamond and DM Sans are licensed under the SIL Open Font License 1.1, which permits self-hosting on a commercial website. Bundled via @fontsource.
- Real photographs added later: get written permission from any recognizable client and from the owner of any horse shown (see `PHOTOGRAPHY.md`). If a photographer is hired, get a written license covering web use.

## Forms

The site has no forms. Contact is by email link, and booking is handled on Square's pages. If a contact form is added later: include a consent line ("By sending this form you agree to our Privacy Policy"), a visible label on every field, no CAPTCHA that blocks keyboard users, and send submissions to a provider named in the Privacy Policy.
