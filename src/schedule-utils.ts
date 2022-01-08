import { isWithinInterval, lastDayOfMonth } from 'date-fns';
import {
  monthShorthandToMonthOfYear,
  shorthandMonthToDayOfMonth,
} from './month-utils';
import { Interval } from './types';

export const checkSchedule = (interval: Interval) => {
  const currentDate = new Date();
  const dateFnsSchedule = toDateFnsInterval(interval);
  return isWithinInterval(currentDate, dateFnsSchedule);
};

const toDateFnsInterval = (interval: Interval) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const startMonth = monthShorthandToMonthOfYear(interval.start);
  const endMonth = monthShorthandToMonthOfYear(interval.end);
  const isEndMonthBeforeStartMonth = endMonth < startMonth;
  const hasStartMonthPassed = startMonth < currentDate.getMonth();
  return {
    start: new Date(
      isEndMonthBeforeStartMonth && !hasStartMonthPassed
        ? currentYear - 1
        : currentYear,
      startMonth,
      shorthandMonthToDayOfMonth(interval.start) || 1
    ),
    end: new Date(
      isEndMonthBeforeStartMonth && !hasStartMonthPassed
        ? currentYear
        : currentYear + 1,
      endMonth,
      shorthandMonthToDayOfMonth(interval.end) ||
        lastDayOfMonth(currentDate).getDate()
    ),
  };
};
