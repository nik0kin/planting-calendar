const _monthShorthandToMonthOfYear = {
  jan: 0,
  feb: 1,
  mar: 2,
  march: 2,
  apr: 3,
  april: 3,
  may: 4,
  jun: 5,
  june: 5,
  jul: 6,
  july: 6,
  aug: 7,
  sep: 8,
  sept: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

export const monthShorthandToMonthOfYear = (month: string) => {
  month = month.replace(/(early|mid|late)-/, '');

  const monthOfYear =
    _monthShorthandToMonthOfYear[
      month as keyof typeof _monthShorthandToMonthOfYear
    ];

  if (typeof monthOfYear !== 'number') {
    throw new Error('Undefined month shorthand: ' + month);
  }

  return monthOfYear;
};

const monthShorthandToFullWord = {
  jan: 'January',
  feb: 'February',
  mar: 'March',
  march: 'March',
  apr: 'April',
  april: 'April',
  may: 'May',
  jun: 'June',
  june: 'June',
  jul: 'July',
  july: 'July',
  aug: 'August',
  sep: 'September',
  sept: 'September',
  oct: 'October',
  nov: 'November',
  dec: 'December',
};

export const monthShorthandToString = (month: string) => {
  const monthOnlyShorthand = month.replace(
    /(early|mid|late)-/,
    ''
  ) as keyof typeof monthShorthandToFullWord;

  return month.replace(
    monthOnlyShorthand,
    monthShorthandToFullWord[monthOnlyShorthand]
  );
};

export const shorthandMonthToDayOfMonth = (intervalDate: string) => {
  if (intervalDate.includes('early')) {
    return 7;
  }
  if (intervalDate.includes('mid')) {
    return 15;
  }
  if (intervalDate.includes('late')) {
    return 22;
  }
};
