import React from 'react';
import './BurgerMenu.css';

export const BurgerMenu = ({ elements, visible, setVisible }) => {
  return (
    <div>
      <div className={visible ? 'nav_burger_menu active' : 'nav_burger_menu'}>
        <button className='removeBtn' onClick={() => setVisible()} type='button'>
          ✖
        </button>
        <ul className='nav navbar-nav nav_links'>
          {elements.map((navLink) => (
            <li key={navLink.href} className='dropdown'>
              <a className='dropdown-toggle' href={navLink.href}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
