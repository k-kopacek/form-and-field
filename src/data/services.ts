export const prices = {
  intro: { name: 'New Client Intro', duration: '55 minutes', price: 75, note: 'A considered place to begin.', provisional: false },
  private: { name: 'Private Pilates', duration: '55 minutes', price: 95, note: 'One-to-one instruction, built around you.', provisional: false },
  five: { name: '5 Private Sessions', duration: '55 minutes each', price: 450, note: '$90 per session', provisional: false },
  ten: { name: '10 Private Sessions', duration: '55 minutes each', price: 850, note: '$85 per session', provisional: false },
  duet: { name: 'Private Duet', duration: '55 minutes', price: 65, suffix: ' / person', note: 'Share your session with one other person.', provisional: false },
  equine: { name: 'Equine Bodywork', duration: 'Approximately 60–75 minutes', price: 125, note: 'Individual attention for the equine athlete.', provisional: true },
  partnership: { name: 'Horse + Rider Performance', duration: '90 minutes', price: 175, note: 'A session built around your partnership.', provisional: true },
};
export type PriceKey = keyof typeof prices;
export const services = [
  { number: '01', label: 'Movement', title: 'Pilates & movement', slug: 'pilates', description: 'Build strength, mobility, and a clearer sense of how you move. Private instruction, at your pace.', priceKey: 'intro' as PriceKey },
  { number: '02', label: 'Equine', title: 'Equine bodywork', slug: 'equine', description: 'Thoughtful observation and hands-on bodywork, with your horse’s movement at the center.', priceKey: 'equine' as PriceKey },
  { number: '03', label: 'Connection', title: 'Horse + rider', slug: 'horse-rider', description: 'Bring both sides of the partnership into focus. One approach to two athletes moving together.', priceKey: 'partnership' as PriceKey },
];
export const equipment = ['Balanced Body Allegro Reformer', 'Power Tower', 'Balanced Body Arc'];
