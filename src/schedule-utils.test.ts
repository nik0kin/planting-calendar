import { checkSchedule } from './schedule-utils';

const currentYear = new Date().getFullYear();

test('feb should be in the schedule jan-march', () => {
  jest.setSystemTime(new Date(`${currentYear}-02-01`).getTime());

  expect(
    checkSchedule({
      start: 'jan',
      end: 'march',
    })
  ).toBe(true);
});

test('jan should be in the schedule dec-feb', () => {
  jest.setSystemTime(new Date(`${currentYear}-01-03`).getTime());

  expect(
    checkSchedule({
      start: 'dec',
      end: 'feb',
    })
  ).toBe(true);
});

test('dec should be in the schedule nov-feb', () => {
  jest.setSystemTime(new Date(`${currentYear}-12-06`).getTime());

  expect(
    checkSchedule({
      start: 'nov',
      end: 'feb',
    })
  ).toBe(true);
});
