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
      name: 'Corn',
      schedule: [
        {
          start: 'late-feb',
          end: 'mid-apr',
        },
        {
          start: 'mid-jul',
          end: 'mid-aug',
        },
      ],
    },
    {
      name: 'Cucumber',
      schedule: [
        {
          start: 'march',
          end: 'april',
        },
        {
          start: 'aug',
          end: 'early-sept',
        },
      ],
    },
    {
      name: 'Eggplant (transplants)',
      schedule: [
        {
          start: 'mid-march',
          end: 'april',
        },
        {
          start: 'mid-jul',
          end: 'mid-aug',
        },
      ],
    },
    {
      name: 'Fava beans',
      schedule: [
        {
          start: 'feb',
          end: 'feb',
        },
        {
          start: 'oct',
          end: 'early-nov',
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
      name: 'Kale (seeds or transplants)',
      schedule: [
        {
          start: 'mid-jan',
          end: 'feb',
        },
        {
          start: 'sep',
          end: 'nov',
        },
      ],
    },
    {
      name: 'Kohlrabi (seeds or transplants)',
      schedule: [
        {
          start: 'mid-jan',
          end: 'early-mar',
        },
        {
          start: 'late-aug',
          end: 'early-nov',
        },
      ],
    },
    {
      name: 'Leeks (seeds/transplants)',
      schedule: [
        {
          start: 'jan', // 1/4s of jan
          end: 'feb', // 3/4s of feb
        },
        // seed mid-sept to mid-oct?
      ],
    },
    {
      name: 'Lettuce (seeds or transplants)',
      schedule: {
        start: 'mid-sept',
        end: 'mid-mar',
      },
    },
    {
      name: 'Mustard (seeds or transplants)',
      schedule: [
        {
          start: 'mid-jan',
          end: 'late-mar',
        },
        {
          start: 'late-aug',
          end: 'mid-nov',
        },
      ],
    },
    {
      name: 'Okra',
      schedule: [
        {
          start: 'april',
          end: 'early-july',
        },
        {
          start: 'late-jul',
          end: 'mid-aug',
        },
      ],
    },
    {
      name: 'Onion, bulbing (transplants)',
      schedule: [
        {
          start: 'jan', // 1/4s of jan
          end: 'early-feb',
        },
        // seed mid-oct?
      ],
    },
    {
      name: 'Onion, bunching/multiplying',
      schedule: {
        start: 'sept',
        end: 'oct',
      },
    },
    {
      name: 'Peas, English, snap and snow',
      schedule: [
        {
          start: 'mid-jan',
          end: 'mid-feb',
        },
        {
          start: 'sept',
          end: 'early-oct',
        },
      ],
    },
    {
      name: 'Peas, Southern',
      schedule: [
        {
          start: 'late-march',
          end: 'early-july',
        },
        {
          start: 'late-july',
          end: 'mid-aug',
        },
      ],
    },
    {
      name: 'Pepper (transplants)',
      schedule: [
        {
          start: 'mid-march',
          end: 'mid-may',
        },
        {
          start: 'mid-july',
          end: 'mid-aug',
        },
      ],
    },
    {
      name: 'Potato, Irish',
      schedule: [
        {
          start: 'late-jan',
          end: 'feb',
        },
        {
          start: 'mid-aug',
          end: 'early-sept',
        },
      ],
    },
    {
      name: 'Potato, sweet (slips)',
      schedule: {
        start: 'april', // 1/4 into april
        end: 'june',
      },
    },
    {
      name: 'Pumpkin',
      schedule: {
        start: 'march', // 1/4 into march
        end: 'early-july',
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
      name: 'Shallots',
      schedule: {
        start: 'late-sept',
        end: 'nov',
      },
    },
    {
      name: 'Spinach (seeds or transplants)',
      schedule: {
        start: 'mid-sept',
        end: 'feb',
      },
    },
    {
      name: 'Squash, summer',
      schedule: [
        {
          start: 'march',
          end: 'apr',
        },
        {
          start: 'aug',
          end: 'mid-sept',
        },
      ],
    },
    {
      name: 'Squash, winter',
      schedule: [
        {
          start: 'march', // 1/4 into march
          end: 'early-jun',
        },
        {
          start: 'late-july',
          end: 'mid-aug',
        },
      ],
    },
    {
      name: 'Tomatoes (transplants)',
      schedule: [
        {
          start: 'late-feb',
          end: 'april', // 3/4 into april
        },
        {
          start: 'july',
          end: 'mid-aug',
        },
      ],
    },
    {
      name: 'Turnip',
      schedule: [
        {
          start: 'mid-jan',
          end: 'march',
        },
        {
          start: 'late-aug',
          end: 'mid-nov',
        },
      ],
    },
    {
      name: 'Watermelon',
      schedule: {
        start: 'late-march',
        end: 'may',
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
