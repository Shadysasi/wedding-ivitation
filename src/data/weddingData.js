import groomImage from '../assets/groom.png';
import brideImage from '../assets/bride.jpg';
export const weddingData = {
  couple: {
    groom: 'M. MADHANKUMAR',
    bride: 'C. PRIYADHARSHINI'
  },
  date: '25 October 2026',
  targetDate: '2026-10-25T06:00:00+05:30',

  story: {
    intro: 'Two paths, one beautiful chapter, and a lifetime waiting to be written together.',
    bride: {
      name: 'C.Priya Dharshini',
      role: 'The Bride',
      description: 'Warm-hearted, graceful, and happiest when surrounded by the people she loves.',
      image: brideImage
    },
    groom: {
      name: 'M. Madhan Kumar',
      role: 'The Groom',
      description: 'Thoughtful, quietly charming, and always ready for the next adventure with Priya.',
      image: groomImage
    },
    timeline: [
      ['First Met', 'A serendipitous hello that changed everything.'],
      ['First Date', 'An ordinary evening that somehow felt unforgettable.'],
      ['She Said Yes', 'One question. One joyful answer. A thousand new dreams.'],
      ['Forever Begins', 'And now, surrounded by family, we begin forever.'],
    ],
  },
  events: [
    { type: 'Reception', date: '24 October 2026', time: '6:00 PM Onwards', venue: 'Jayasakthi Palace AC Kalyana Mandapam', address: '41, Madipakkam Main Rd, Madipakkam, Moovarasampettai, Chennai 600091' },
    { type: 'Wedding Ceremony', date: '25 October 2026', time: '6:00 – 7:30 AM', venue: 'Jayasakthi Palace AC Kalyana Mandapam', address: '41, Madipakkam Main Rd, Madipakkam, Moovarasampettai, Chennai 600091' }
  ],
 
  venue: {
    name: 'Jayasakthi Palace AC Kalyana Mandapam',
    address: '41, Madipakkam Main Rd, near SAI School, Ram Nagar Police check post, Ram Nagar South, Madipakkam, Moovarasampettai, Chennai 600091',
    mapsUrl: 'https://www.google.com/maps/place/Jayasakthi+Palace+AC+Kalyana+Mandapam/@12.9682895,80.1907408,17z/data=!4m6!3m5!1s0x3a525de6d594280f:0xb63b535bd6ece62c!8m2!3d12.9682895!4d80.1933157!16s%2Fg%2F11cncmnb8k?entry=ttu&g_ep=EgoyMDI2MDkyNy4wIKXMDSoASAFQAw%3D%3D',
  },
}
