import React from 'react';
import { Link } from 'react-router-dom';
import { CopyrightFooter } from '../..';

import './Footer.css';

export const Footer = () => {
  const footerNav = [
    { title: 'Главная', link: '/' },
    { title: 'Портфолио', link: '/portfolio' },
    { title: 'Оборудование завода', link: '/' },
    { title: 'Применение', link: '/application' },
    { title: 'Наши референсы', link: '/' },
    { title: 'Контакты', link: '/' },
  ];

  return (
    <div>
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-lg-3 col-sm-3 address wow fadeInUp'
              data-wow-duration='2s'
              data-wow-delay='.1s'
              style={{ width: '50%' }}
            >
              <h1>КОНТАКТЫ</h1>
              <address>
                <p>
                  <i className='fa fa-globe pr-10' /> Узбекистан, Ташкентская область,
                </p>
                <p>
                  <i className='fa fa-home pr-10' /> 110100 г. Алмалык пос. Бустон
                </p>
                <p>
                  <a href='tel:+998935006532' className='fa fa-mobile pr-10'>
                    (998 93) 500 65 32
                  </a>
                </p>
                <p>
                  <a href='tel:+998946246875' className='fa fa-mobile pr-10'>
                    (998 94) 624 68 75
                  </a>
                </p>
                <p>
                  <i className='fa fa-envelope pr-10' />
                  <a href='mailto:dilshod.h84@gmail.com'>dilshod.h84@gmail.com</a>
                </p>
              </address>
            </div>

            <div className='col-lg-3 col-sm-3'>
              <div className='page-footer wow fadeInUp' data-wow-duration='2s' data-wow-delay='.5s'>
                <h1>меню</h1>
                <ul className='page-footer-list'>
                  {footerNav.map((navLink) => (
                    <li key={navLink.title}>
                      <Link to={navLink.link}>{navLink.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CopyrightFooter />
    </div>
  );
};
