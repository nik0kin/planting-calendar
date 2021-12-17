import { isWithinInterval, lastDayOfMonth } from 'date-fns';
import {
  monthShorthandToMonthOfYear,
  shorthandMonthToDayOfMonth,
} from './month-utils';
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
      shorthandMonthToDayOfMonth(interval.start) || 1
    ),
    end: new Date(
      endMonth < startMonth ? currentYear + 1 : currentYear,
      endMonth,
      shorthandMonthToDayOfMonth(interval.end) ||
        lastDayOfMonth(currentDate).getDate()
    ),
  };
};
