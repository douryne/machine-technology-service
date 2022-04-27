import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg';
import { BurgerMenu, BlueTitle } from '../..';
import { useAutoCloseSidebar } from '../../../hooks/useAutoCloseSidebar';

import './Navbar.css';
import './Navbar-media.css';

export const Navbar = () => {
  const navList = [
    { title: 'Главная', href: '/' },
    { title: 'Портфолио', href: '/portfolio' },
    { title: 'Оборудование завода', href: '/equipment' },
    { title: 'Применение', href: '/application' },
    { title: 'Наши референсы', href: '/info' },
    { title: 'Контакты', href: '/contacts' },
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
            {navList.length ? (
              navList.map((navLink) => (
                <li key={navLink.title} className='dropdown'>
                  <Link className='dropdown-toggle' to={navLink.href}>
                    {navLink.title}
                  </Link>
                </li>
              ))
            ) : (
              <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};
