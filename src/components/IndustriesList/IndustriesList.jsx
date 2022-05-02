import React from 'react';
import { Industry, BlueTitle } from '..';
import { industryData } from '../../utils/industryData';

import classes from './IndustriesList.module.css';

export const IndustriesList = () => {
  return (
    <div className={classes.List}>
      {industryData.length ? (
        industryData.map((item) => <Industry key={item.title} title={item.title} image={item.image} text={item.text} />)
      ) : (
        <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
      )}
    </div>
  );
};
