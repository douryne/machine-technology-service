import React from 'react';
import classes from './Industry.module.css';

export const Industry = ({ image, title, text }) => {
  return (
    <div className={classes['industry-component']}>
      <img src={image} alt='pic' />
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.text}>{text}</p>
    </div>
  );
};
