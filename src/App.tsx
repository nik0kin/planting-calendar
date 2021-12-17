import * as React from 'react';
import { monthShorthandToString } from './month-utils';
import { checkSchedule } from './schedule-utils';
import travisCounty from './data/travis-county';
import { PlantPlantingSchedule, Interval } from './types';

export default () => {
  return (
    <>
      {/* What vegetables are easiest to grow right now? */}
      <h1>What vegetables should I plant?</h1>
      <p style={{ fontSize: '1.15em' }}>
        According to{' '}
        <a href={travisCounty.source} target="_blank">
          <strong>{travisCounty.expert}</strong>
        </a>{' '}
        you should plant the following in {travisCounty.location}{' '}
        <em>right now</em>:
      </p>
      <ul>
        {filterApplicablePlants(travisCounty.plants).map((p) => (
          <li key={p.name}>
            <strong>{p.name}</strong> &nbsp;&nbsp; {renderSchedule(p.schedule)}
          </li>
        ))}
      </ul>
      <br />
      <br />
      {(travisCounty.notes || []).map((n, i) => (
        <p key={i}>{n}</p>
      ))}
    </>
  );
};

const renderSchedule = (schedule: Interval | Interval[]): string => {
  if (Array.isArray(schedule)) {
    return schedule.map((s) => renderSchedule(s)).join(', ');
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
