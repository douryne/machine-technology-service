import React from 'react';
import classes from './BlueTitle.module.css';

export const BlueTitle = ({ children, importance }) => {
  const HeaderTag = `h${importance}`;
  return <HeaderTag className={classes.title}>{children}</HeaderTag>;
};
