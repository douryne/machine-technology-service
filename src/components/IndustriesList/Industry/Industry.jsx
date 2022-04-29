import React from 'react';
import { BlueTitle, DescriptionText } from '../..';
import { useAnimations } from '../../../hooks/useAnimations';
import classes from './Industry.module.css';

export const Industry = ({ image, title, text }) => {
  useAnimations();

  return (
    <div data-aos='fade-up-right' className={classes['industry-component']}>
      <img src={image} alt='pic' />
      <BlueTitle className={classes.title} importance={3}>
        {title}
      </BlueTitle>
      <DescriptionText className={classes.text}>{text}</DescriptionText>
    </div>
  );
};
