export const SITE = {
  name: 'Jai Gurudev Ceramics & Hardware',
  shortName: 'Jai Gurudev',
  tagline: 'Tiles That Tell Stories.',
  subTagline: 'Premium tiles crafted for timeless homes.',
  owner: 'B R Choudhary',
  foundedYear: 2014,
  address: '4-11, Shop No 2, Narayanvaram Road, Puttur - 517583',
  mapsUrl: 'https://maps.app.goo.gl/2wcy6oX2wyMpP8bu6',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Jai+Gurudev+Ceramics+and+Hardware+Narayanvaram+Road+Puttur+517583&output=embed',
  phone: '',
  whatsapp: '',
  email: '',
  hours: 'Monday - Sunday, 9:00 AM - 8:30 PM',
} as const;

export const YEARS_OF_EXPERIENCE = new Date().getFullYear() - SITE.foundedYear;
