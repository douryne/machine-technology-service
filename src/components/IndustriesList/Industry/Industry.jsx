import React from 'react';
import { BlueTitle, DescriptionText } from '../..';
import classes from './Industry.module.css';

export const Industry = ({ image, title, text }) => {
  return (
    <div className={classes['industry-component']}>
      <img src={image} alt='pic' />
      <BlueTitle className={classes.title} importance={3}>
        {title}
      </BlueTitle>
      <DescriptionText className={classes.text}>{text}</DescriptionText>
    </div>
  );
};
