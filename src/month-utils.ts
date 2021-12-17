const _monthShorthandToMonthOfYear = {
  jan: 0,
  feb: 1,
  mar: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  aug: 7,
  sept: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

export const monthShorthandToMonthOfYear = (month: string) => {
  month = month.replace('mid-', '');

  const monthOfYear =
    _monthShorthandToMonthOfYear[
      month as keyof typeof _monthShorthandToMonthOfYear
    ];

  if (typeof monthOfYear !== 'number') {
    throw new Error('Undefined month shorthand' + month);
  }

  return monthOfYear;
};

const monthShorthandToFullWord = {
  jan: 'January',
  feb: 'Febuary',
  mar: 'March',
  april: 'April',
  may: 'May',
  june: 'June',
  july: 'July',
  aug: 'August',
  sept: 'September',
  oct: 'October',
  nov: 'November',
  dec: 'December',
};

export const monthShorthandToString = (month: string) => {
  return `${month.includes('mid') ? 'mid-' : ''}${
    monthShorthandToFullWord[
      month.replace('mid-', '') as keyof typeof monthShorthandToFullWord
    ]
  }`;
};
