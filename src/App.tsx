import * as React from 'react';
import { monthShorthandToString } from './month-utils';
import { checkSchedule } from './schedule-utils';
import travisCounty from './data/travis-county';
import { PlantPlantingSchedule, Interval } from './types';

export const App: React.FC = () => {
  const dataSet = travisCounty;
  return (
    <>
      {/* What vegetables are easiest to grow right now? */}
      <h1>What vegetables should I plant?</h1>
      <p style={{ fontSize: '1.15em' }}>
        According to{' '}
        <a href={dataSet.source} target="_blank">
          <strong>{dataSet.expert}</strong>
        </a>{' '}
        you should plant the following in {dataSet.location} <em>right now</em>:
      </p>
      <ul>
        {filterApplicablePlants(dataSet.plants).map((p) => (
          <li key={p.name}>
            <strong>{p.name}</strong> &nbsp;&nbsp; {renderSchedule(p.schedule)}
          </li>
        ))}
      </ul>
      <br />
      <br />
      {(dataSet.notes || [])
        .concat([
          'Average first freeze: ' + dataSet.averageFirstFreeze,
          'Average last freeze: ' + dataSet.averageLastFreeze,
        ])
        .map((n, i) => (
          <p key={i}>{n}</p>
        ))}
    </>
  );
};

const renderSchedule = (schedule: Interval | Interval[]): string => {
  if (Array.isArray(schedule)) {
    return schedule.map((s) => renderSchedule(s)).join(', ');
  }

  if (schedule.start === schedule.end) {
    return monthShorthandToString(schedule.start);
  }

  return (
    monthShorthandToString(schedule.start) +
    ' to ' +
    monthShorthandToString(schedule.end)
  );
};

// based on date
const filterApplicablePlants = (plants: PlantPlantingSchedule[]) => {
  return plants.filter((p) => {
    if (Array.isArray(p.schedule)) {
      return p.schedule.some(checkSchedule);
    }
    return checkSchedule(p.schedule);
  });
};
