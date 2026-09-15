# Content and launch checklist

The finished design uses **Form + Field as a working name**. It is an umbrella brand; Pilates, Equine, and Movement are editable service descriptors rather than limits on future products.

## Confirm before public launch

See LEGAL-REVIEW.md for the legal and accessibility review and its action items.

- [ ] Fill in legalName and entityType in src/data/legal.ts (placeholders show on every legal page and in the footer).
- [ ] Sign off the Terms, Refund policy, and equine warning with a Colorado attorney; prepare the participation waiver and the physical equine warning sign.
- [ ] Confirm the BTMM certificate satisfies C.R.S. 12-235-110 for animal massage by a non-veterinarian.

- [ ] Final brand name and domain. Form + Field is already used by other businesses; no trademark, Colorado business-name, domain, or social-handle clearance has been performed.
- [ ] Stephanie’s biography. Current copy uses only the supplied facts and a proposed editorial description of her approach.
- [ ] Balance Through Movement Method credential wording.
- [ ] Polestar status. All current copy says her education/certification is in progress. Update only when completed.
- [ ] Final service descriptions and Horse + Rider format. Confirm whether/how mounted observation is included and what facilities are needed.
- [ ] Equine session location, travel radius, travel charges, and property/horse arrival logistics. Current copy asks clients to confirm arrangements before travel and does not promise mobile service.
- [ ] Pilates pricing, package terms and duet availability. Package expiration, transferability and refunds have not been invented.
- [ ] Equine rate of $125 and Horse + Rider rate of $175. Both are internally marked provisional in src/data/services.ts.
- [ ] Confirm the provisional 24-hour cancellation policy and add actual late-cancellation terms if applicable. No fee has been invented.
- [ ] Add the real Square Appointments URL as PUBLIC_BOOKING_URL (see README.md; optional inline widget via PUBLIC_BOOKING_EMBED_SRC).
- [ ] Add a business contact email; phone and social accounts are optional. Empty contact fields are not rendered.
- [ ] Approve photography or replace the generated editorial studies with real photographs. No image depicts Stephanie or claims to show the actual property. Photo slots are ready on every page; see "Adding real photos" in README.md.
- [ ] Add genuine, permissioned testimonials to src/data/site.ts if available. The testimonial component exists and remains hidden while its data is empty.
- [ ] Check appropriate business policies and any processor-hosted intake/consent material for the actual services offered.
- [ ] Select the final domain, configure GitHub Pages (workflow is in .github/workflows/deploy.yml; steps in README.md), and verify all routes with the real base path.
- [ ] Set PUBLIC_SITE_LIVE=true once approved content is ready; this removes noindex and permits search crawling. Keep it false for previews.

## Intentional V1 decisions

- The public site covers only Pilates, equine bodywork and Horse + Rider.
- No future services are advertised.
- No exact residential address, invented contact details, fake client quotes or invented credentials appear.
- Equine bodywork is clearly distinguished from veterinary diagnosis and treatment.
- Booking buttons share a single configuration. Without a live URL they lead to an honest scheduling notice; they do not fabricate an appointment.
- Payment information is never collected or stored by the website.
- No analytics or third-party embeds are loaded by default. Fonts and imagery are local.
- The business name, navigation, contact details, prices, equipment, policies and FAQs have centralized sources.

## Additional naming directions

If the Form + Field name cannot be adopted, keep its paired-word structure and broad meaning. **Field + Well**, **Root + Range**, and **Form + Flourish** are further creative directions, not availability-checked names.

The masterbrand should stand alone. Category descriptors can change over time without changing the wordmark or website structure. Future products can use the same masterbrand with plain product names.

Preliminary name references: [FormAndField](https://formandfield.com/studio) is an existing design practice; [REIN FORM](https://reinstep.com/products/rein-form-pack-of-3) is used for Pilates products. These checks are limited web searches, not legal clearance.
