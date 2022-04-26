import React from 'react';
import { BlueHeader, DescriptionText } from '..';
import classes from './Industry.module.css';

export const Industry = ({ image, title, text }) => {
  return (
    <div className={classes['industry-component']}>
      <img src={image} alt='pic' />
      <BlueHeader className={classes.title} importance={3}>
        {title}
      </BlueHeader>
      <DescriptionText className={classes.text}>{text}</DescriptionText>
    </div>
  );
};
