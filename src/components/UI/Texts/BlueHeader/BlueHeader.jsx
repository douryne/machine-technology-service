import React from 'react';
import classes from './BlueHeader.module.css';

export const BlueHeader = ({ children, importance }) => {
  const HeaderTag = `h${importance}`;
  return <HeaderTag className={classes.title}>{children}</HeaderTag>;
};
