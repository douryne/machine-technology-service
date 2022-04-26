import React from 'react';
import classes from './GreyTitle.module.css';

export const GreyTitle = ({ children, importance }) => {
  const HeaderTag = `h${importance}`;
  return <HeaderTag className={classes.title}>{children}</HeaderTag>;
};
