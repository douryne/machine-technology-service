import React, { useState } from 'react';
import logo from '../../../assets/img/logo.jpg';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { useAutoCloseSidebar } from '../../../hooks/useAutoCloseSidebar';

import './Navbar.css';
import './Navbar-media.css';

export const Navbar = () => {
  const navList = [
    { title: 'Главная', href: 'index.html' },
    { title: 'Портфолио', href: 'folio.html' },
    { title: 'Оборудование завода', href: 'equipment.html' },
    { title: 'Применение', href: 'practise.html' },
    { title: 'Наши референсы', href: 'info.html' },
    { title: 'Контакты', href: 'contact.html' },
  ];

  const menuMinScreenWidth = 768;
  const [visible, setVisible] = useState(false);

  useAutoCloseSidebar(menuMinScreenWidth, () => setVisible(false));

  return (
    <header className='head-section'>
      <div className='navbar navbar-default navbar-static-top container'>
        <div className='navbar-header'>
          <button
            className='navbar-toggle'
            onClick={() => {
              setVisible(true);
            }}
            type='button'
          >
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <a className='navbar-brand' href='index.html'>
            <img src={logo} align='left' alt='logo' />
          </a>
        </div>
        <div id='lang'>
          <ul>
            <li id='langruactive'>
              <a href='index.html' aria-label='langru' />
            </li>
            <li id='languz'>
              <a href='indexuz.html' aria-label='languz' />
            </li>
            <li id='langen'>
              <a href='indexen.html' aria-label='langen' />
            </li>
          </ul>
        </div>

        <BurgerMenu elements={navList} visible={visible} setVisible={() => setVisible(false)} />

        <div className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            {navList.map((navLink) => (
              <li key={navLink.href} className='dropdown'>
                <a className='dropdown-toggle' href={navLink.href}>
                  {navLink.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
