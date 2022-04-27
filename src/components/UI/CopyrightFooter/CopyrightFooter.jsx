import React from 'react';

import classes from './CopyrightFooter.module.css';

export const CopyrightFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className='container'>
        <div className={classes.content}>
          <span>2022</span>
          <span>@Copyright</span>
          <span>JGate</span>
        </div>
      </div>
    </footer>
  );
};
