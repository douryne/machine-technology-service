import React from 'react';
import { Industry } from '..';
import { industryData } from '../../utils/industryData';

import classes from './IndustriesList.module.css';

export const IndustriesList = () => {
  return (
    <ul className={classes.List}>
      {industryData.map((item) => (
        <Industry key={item.title} title={item.title} image={item.image} text={item.text} />
      ))}
    </ul>
  );
};
