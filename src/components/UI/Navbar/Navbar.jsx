import React, { useEffect, useState } from 'react';
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
  const [langOpen, setLangOpen] = useState(true);

  useAutoCloseSidebar(menuMinScreenWidth, () => setVisible(false));

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setLangOpen(false);
      }, 1000);
    } else if (!visible) {
      setLangOpen(true);
    }
  });

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
        <div id='lang' className={langOpen ? 'invisible' : ''}>
          <ul className={!visible ? 'visible' : ''}>
            <li id='langruactive'>
              <a href='index.html' aria-label='langru' />
            </li>
            <li id='languz'>
              <a href='indexuz.html' aria-label='languz' />
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
