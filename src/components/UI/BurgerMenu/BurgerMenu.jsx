import React from 'react';
import { CloseButton, BlueTitle } from '../..';

import './BurgerMenu.css';

export const BurgerMenu = ({ elements, visible, setVisible }) => {
  return (
    <div>
      <div className={visible ? 'nav_burger_menu active' : 'nav_burger_menu'}>
        <ul className='nav navbar-nav nav_links'>
          {elements.length ? (
            elements.map((navLink) => (
              <li key={navLink.title} className='dropdown'>
                <a className='dropdown-toggle' href={navLink.href}>
                  {navLink.title}
                </a>
              </li>
            ))
          ) : (
            <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
          )}
        </ul>
        <CloseButton handleClose={setVisible} />
      </div>
    </div>
  );
};
