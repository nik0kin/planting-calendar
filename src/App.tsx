import * as React from 'react';
import travisCounty from './travis-county';

export default () => {
  return (
    <>
      <h3>
        According to{' '}
        <a href={travisCounty.source} target="_blank">
          <strong>{travisCounty.expert}</strong>
        </a>{' '}
        you should plant the following in {travisCounty.location}{' '}
        <em>right now</em>:
      </h3>
      <ul>
        <li>Spinach (September - March)</li>
        <li>Radish (September - March)</li>
        <li>Lettuce (September - March)</li>
      </ul>
    </>
  );
};
