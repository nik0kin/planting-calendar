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
      name: 'Carrots',
      schedule: [
        {
          start: 'mid-jan',
          end: 'feb', // 1/4 into march?
        },
        {
          start: 'sept', // last 1/4 of aug?
          end: 'oct', // 1/4 into nov?
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
