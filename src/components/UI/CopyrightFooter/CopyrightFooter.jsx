import React from 'react';

import classes from './CopyrightFooter.module.css';

export const CopyrightFooter = () => {
  return (
    <footer className={classes.footer}>
      <div className='container'>
        <div className={classes.content}>
          <span>2021</span>
          <span>@Copyright</span>
          <span>DALHEAVY.UZ</span>
          <a className={classes.link} href='http://www.kamilov.uz/'>
            web-developer
          </a>
        </div>
      </div>
    </footer>
  );
};
