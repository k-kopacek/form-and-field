export const brand = {
  name: 'Form + Field', first: 'Form', second: 'Field',
  descriptor: 'Pilates · Equine · Movement',
  founder: 'Stephanie Kopacek', location: 'Larkspur, Colorado',
};
export const contact = {
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || '',
  phone: import.meta.env.PUBLIC_CONTACT_PHONE || '',
  instagram: import.meta.env.PUBLIC_CONTACT_INSTAGRAM || '',
};
const rawBookingURL = import.meta.env.PUBLIC_BOOKING_URL?.trim() || '';
if (rawBookingURL && !/^https:\/\/[^/\s]+(?:\/|$)/i.test(rawBookingURL)) throw new Error('PUBLIC_BOOKING_URL must be a full HTTPS booking URL.');
const rawEmbed = import.meta.env.PUBLIC_BOOKING_EMBED_SRC?.trim() || '';
if (rawEmbed && !/^https:\/\/(?:[a-z0-9-]+\.)*square\.site\/appointments\/buyer\/widget\/[\w-]+\/[\w-]+\.js$/i.test(rawEmbed)) throw new Error('PUBLIC_BOOKING_EMBED_SRC must be a Square Appointments widget script URL (https://square.site/appointments/buyer/widget/<id>/<id>.js).');
// url: the public "Book now" link from Square Appointments (or any HTTPS scheduler).
// embedSrc: optional Square widget script; when set, the Book page renders Square's inline widget.
export const booking = { url: rawBookingURL, embedSrc: rawEmbed, external: Boolean(rawBookingURL) };
export const policy = { cancellationHours: 24, provisional: true };
export const isLive = import.meta.env.PUBLIC_SITE_LIVE === 'true';
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const path = (route = '') => base + '/' + route.replace(/^\/|\/$/g, '') + (route ? '/' : '');
export const asset = (file: string) => base + '/' + file.replace(/^\//, '');
export const bookingHref = () => booking.url || path('book');
export const navigation = [
  { label: 'Pilates', slug: 'pilates' }, { label: 'Equine', slug: 'equine' },
  { label: 'Horse + Rider', slug: 'horse-rider' }, { label: 'About', slug: 'about' }, { label: 'Studio', slug: 'studio' },
];
export const routes = ['', 'pilates', 'equine', 'horse-rider', 'about', 'studio', 'faq', 'book', 'privacy', 'terms', 'refunds', 'cookies'];
export type Testimonial = { quote: string; name: string; context: string };
// Only genuine, approved feedback. The section stays hidden until supplied.
export const testimonials: Testimonial[] = [];
