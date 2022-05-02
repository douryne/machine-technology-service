import React from 'react';
import classes from './GreyTitle.module.css';

export const GreyTitle = ({ children, importance }) => {
  const HeaderTag = `h${importance < 1 || importance > 6 ? 1 : importance}`;
  return <HeaderTag className={classes.title}>{children}</HeaderTag>;
};
