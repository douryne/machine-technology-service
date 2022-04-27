import React from 'react';
import { CloseButton } from '../CloseButton/CloseButton';

import './BurgerMenu.css';

export const BurgerMenu = ({ elements, visible, setVisible }) => {
  return (
    <div>
      <div className={visible ? 'nav_burger_menu active' : 'nav_burger_menu'}>
        <ul className='nav navbar-nav nav_links'>
          {elements.map((navLink) => (
            <li key={navLink.href} className='dropdown'>
              <a className='dropdown-toggle' href={navLink.href}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
        <CloseButton handleClose={setVisible} />
      </div>
    </div>
  );
};
