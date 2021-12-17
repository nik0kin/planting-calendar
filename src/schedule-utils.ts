import { isWithinInterval, lastDayOfMonth } from 'date-fns';
import { monthShorthandToMonthOfYear } from './month-utils';
import { Interval } from './types';

export const checkSchedule = (interval: Interval) => {
  const currentDate = new Date();
  return isWithinInterval(currentDate, toDateFnsInterval(interval));
};

const toDateFnsInterval = (interval: Interval) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const startMonth = monthShorthandToMonthOfYear(interval.start);
  const endMonth = monthShorthandToMonthOfYear(interval.end);
  return {
    start: new Date(
      currentYear,
      startMonth,
      interval.start.includes('mid') ? 15 : 1
    ),
    end: new Date(
      endMonth < startMonth ? currentYear + 1 : currentYear,
      endMonth,
      interval.end.includes('mid') ? 15 : lastDayOfMonth(currentDate).getDate()
    ),
  };
};
