import { PlantingCalendar } from '../types';

const cal: PlantingCalendar = {
  location: 'Travis County, TX',
  expert: 'Texas A&M Agrilife Extension',
  source:
    'https://travis-tx.tamu.edu/files/2020/06/Vegetable-Planting-Calendar-Travis-2015.pdf',
  publishDate: 'January 2015',

  averageLastFreeze: 'March4',
  averageFirstFreeze: 'Nov27',

  plants: [
    {
      name: 'Artichoke (crowns)',
      schedule: {
        start: 'jan',
        end: 'feb',
      },
    },
    {
      name: 'Artichoke (transplants)',
      schedule: {
        start: 'sept', // 1/4 into sept?
        end: 'oct', // until 1/4 before nov?
      },
    },
    {
      name: 'Asian greens (seeds or transplants)',
      schedule: {
        start: 'sept',
        end: 'feb',
      },
    },
    {
      name: 'Asparagus (crowns)',
      schedule: {
        start: 'jan',
        end: 'feb',
      },
    },
    {
      name: 'Beans, snap and lima',
      schedule: [
        {
          start: 'march',
          end: 'early-june',
        },
        {
          start: 'mid-aug',
          end: 'mid-sept',
        },
      ],
    },
    {
      name: 'Beets',
      schedule: [
        {
          start: 'mid-jan',
          end: 'early-april',
        },
        {
          start: 'late-aug',
          end: 'early-nov',
        },
      ],
    },
    {
      name: 'Broccoli (transplants)',
      schedule: [
        {
          start: 'mid-jan',
          end: 'feb',
        },
        {
          start: 'late-aug',
          end: 'oct',
        },
      ],
    },
    {
      name: 'Brussel sprouts (transplants)',
      schedule: {
        start: 'late-aug',
        end: 'oct',
      },
    },
    {
      name: 'Cabbage (transplants)',
      schedule: [
        {
          start: 'mid-jan',
          end: 'feb',
        },
        {
          start: 'late-aug',
          end: 'oct',
        },
      ],
    },
    {
      name: 'Cantaloupe (muskmelon)',
      schedule: {
        start: 'mid-march',
        end: 'mid-june',
      },
    },
    {
      name: 'Carrots',
      schedule: [
        {
          start: 'mid-jan',
          end: 'early-march',
        },
        {
          start: 'late-aug',
          end: 'early-nov',
        },
      ],
    },
    {
      name: 'Cauliflower (transplants)',
      schedule: [
        {
          start: 'mid-jan',
          end: 'feb',
        },
        {
          start: 'late-aug',
          end: 'oct',
        },
      ],
    },
    {
      name: 'Chard, Swiss (seeds or transplants)',
      schedule: [
        {
          start: 'mid-jan',
          end: 'april',
        },
        {
          start: 'late-aug',
          end: 'mid-nov',
        },
      ],
    },
    {
      name: 'Collards (seeds or transplants)',
      schedule: [
        {
          start: 'mid-jan',
          end: 'feb',
        },
        {
          start: 'late-aug',
          end: 'mid-nov',
        },
      ],
    },
    {
      name: 'Garlic',
      schedule: {
        start: 'mid-sept',
        end: 'nov',
      },
    },
    {
      name: 'Greens, cool season',
      schedule: {
        start: 'late-sept',
        end: 'march', // 3/4s of march
      },
    },
    {
      name: 'Greens, warm season',
      schedule: {
        start: 'march', // 1/4 into march
        end: 'mid-aug',
      },
    },
    {
      name: 'Lettuce (seeds or transplants)',
      schedule: {
        start: 'mid-sept',
        end: 'mid-mar',
      },
    },
    {
      name: 'Radish',
      schedule: {
        start: 'sept',
        end: 'mar',
      },
    },
    {
      name: 'Spinach (seeds or transplants)',
      schedule: {
        start: 'mid-sept',
        end: 'feb',
      },
    },
  ],

  notes: [
    'Plant seed unless otherwise noted',
    'Plants grown in winter will benefit from protection during freezing weather',
    'Plants grown in late summer will benefit from shade cover during establishment',
  ],
};

export default cal;
