import { policy } from './site';
import { prices } from './services';
export const faqGroups = [
  { title: 'Pilates & movement', id: 'pilates', items: [
    { q: 'Do I need previous Pilates experience?', a: 'No. Private sessions begin with your experience, goals, and current movement. Stephanie introduces the equipment and adjusts the pace and instruction to you.' },
    { q: 'What should I wear?', a: 'Wear comfortable clothing that lets you move freely and allows your instructor to see your alignment. Avoid zippers or hardware that could catch on equipment. Confirm any footwear requirements when booking.' },
    { q: 'What happens during my first session?', a: 'You will discuss your goals and experience, get familiar with the equipment, and explore a selection of movements. There is time for questions and a conversation about how you would like to continue.' },
    { q: 'How long is a Pilates session?', a: 'Intro, private, and duet sessions are ' + prices.private.duration + '. Please arrive ready to begin at your scheduled time.' },
    { q: 'What equipment do you use?', a: 'The studio has a Balanced Body Allegro Reformer, Power Tower, and Balanced Body Arc. Equipment is selected around your individual session.' },
    { q: 'Can riders benefit from Pilates?', a: 'Pilates gives riders a place to explore balance, mobility, coordination, strength, and body awareness away from the saddle. Non-riders are equally welcome.' },
  ] },
  { title: 'Equine bodywork', id: 'equine', items: [
    { q: 'What happens during an equine bodywork session?', a: 'Stephanie begins with a conversation about your horse and their routine, observes how they stand and move, and uses hands-on bodywork within her training. The session follows the horse’s responses and comfort.' },
    { q: 'How long does an equine session take?', a: 'Allow ' + prices.equine.duration.toLowerCase() + '. Timing may vary with your horse’s needs and willingness to participate.' },
    { q: 'Does bodywork replace veterinary care?', a: 'No. Equine bodywork supports movement and performance within the scope of bodywork. It does not diagnose or treat disease, lameness, injury, or medical conditions. Contact your veterinarian about pain, injury, or changes in health.' },
    { q: 'Where do equine sessions take place?', a: 'Session location and handling arrangements are confirmed with Stephanie before your appointment. Do not transport your horse until the location and facilities have been agreed.' },
  ] },
  { title: 'Horse + rider', id: 'horse-rider', items: [
    { q: 'What is a Horse + Rider session?', a: 'An individual session that brings rider movement and equine bodywork into one conversation. Together, you consider the rider’s balance, mobility and awareness, the horse’s movement, and how you coordinate as a pair.' },
    { q: 'Do I need to be a competitive rider?', a: 'No. Thoughtful movement is relevant to recreational and competitive riders. The session is shaped around your experience and goals.' },
    { q: 'Do I bring my horse?', a: 'Confirm the location, horse participation, facilities, and format with Stephanie before booking or arranging transport. Horse + Rider sessions are planned individually.' },
    { q: 'How is Pilates incorporated?', a: 'Pilates-informed movement helps you explore your own balance, control, mobility, and body awareness. The session format is agreed in advance; it is not necessarily a full reformer session plus a mounted lesson.' },
  ] },
  { title: 'Your visit', id: 'studio', items: [
    { q: 'Where are you located?', a: 'The private studio is in a property setting in Larkspur, Colorado. Visits are by appointment.' },
    { q: 'When do I receive the exact address?', a: 'Exact directions are provided to confirmed clients. The residential address is not published online.' },
    { q: 'What is the cancellation policy?', a: 'Please provide at least ' + policy.cancellationHours + ' hours’ notice if you need to cancel or reschedule. Review the confirmed booking terms when you make your appointment.' },
  ] },
];
