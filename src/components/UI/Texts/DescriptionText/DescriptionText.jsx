import React from 'react';

import classes from './DescriptionText.module.css';

export const DescriptionText = ({ children }) => {
  return <p className={classes.text}>{children}</p>;
};
