import React from 'react';
import classes from './CloseButton.module.css';

export const CloseButton = ({ handleClose }) => {
  return (
    <button className={classes.removeBtn} onClick={handleClose} type='button' aria-label='close burger menu button'>
      Закрыть
    </button>
  );
};
