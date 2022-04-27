import React from 'react';
import classes from './BlueTitle.module.css';

export const BlueTitle = ({ children, importance }) => {
  const HeaderTag = `h${importance < 1 || importance > 6 ? 1 : importance}`;
  return <HeaderTag className={classes.title}>{children}</HeaderTag>;
};
