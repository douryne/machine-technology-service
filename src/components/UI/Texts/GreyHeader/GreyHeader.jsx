import React from 'react';
import classes from './GreyHeader.module.css';

export const GreyHeader = ({ children, importance }) => {
  const HeaderTag = `h${importance}`;
  return <HeaderTag className={classes.title}>{children}</HeaderTag>;
};
