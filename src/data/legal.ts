import { brand, contact, policy } from './site';
import { prices } from './services';

// Legal identity. Replace the bracketed placeholders once the business is registered with the
// Colorado Secretary of State. These values appear verbatim in the Privacy Policy, Terms, Refund
// Policy, and the footer, so keep them accurate. Nothing here should be a residential address.
export const legal = {
  legalName: '[LEGAL BUSINESS NAME]',           // e.g. 'Form + Field LLC' or 'Stephanie Kopacek, sole proprietor'
  entityType: '[ENTITY TYPE, e.g. a Colorado limited liability company]',
  tradeName: brand.name,
  state: 'Colorado',
  county: 'Douglas County',                     // Larkspur is in Douglas County; used for venue in the Terms
  contactEmail: contact.email,                  // from PUBLIC_CONTACT_EMAIL
  mailingAddress: '',                           // optional: a PO box or registered agent address, never the home address
  // ISO dates. Bump whenever a policy changes materially.
  privacyUpdated: '2026-09-15',
  termsUpdated: '2026-09-15',
  cookiesUpdated: '2026-09-15',
  refundsUpdated: '2026-09-15',
  // Refund and package terms (see /refunds/). Change here, not in the page copy.
  packageValidityMonths: 12,
  refundWindowDays: 14,
  cancellationHours: policy.cancellationHours,
  singleSessionPrice: prices.private.price,
  // Third parties that can receive client data. Keep this list truthful; the Privacy Policy renders it.
  processors: [
    { name: 'Square (Block, Inc.)', purpose: 'online booking, appointment reminders, and payment processing', policy: 'https://squareup.com/us/en/legal/general/privacy' },
    { name: 'GitHub Pages', purpose: 'website hosting; GitHub receives standard server logs (IP address, browser type, pages requested)', policy: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement' },
  ],
} as const;

export const placeholdersPresent = legal.legalName.startsWith('[') || legal.entityType.startsWith('[');

export const formatDate = (iso: string) => new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

// Colorado Equine Activity Liability Act, C.R.S. 13-21-119(5). Equine professionals must post this
// warning on signs at the facility and include it in written contracts. Text must be reproduced verbatim.
export const equineWarning = 'WARNING: Under Colorado Law, an equine professional is not liable for an injury to or the death of a participant in equine activities resulting from the inherent risks of equine activities, pursuant to section 13-21-119, Colorado Revised Statutes.';

export const legalPages = [
  { label: 'Privacy policy', slug: 'privacy' },
  { label: 'Terms of service', slug: 'terms' },
  { label: 'Refund policy', slug: 'refunds' },
  { label: 'Cookie policy', slug: 'cookies' },
];
