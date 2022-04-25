import React from 'react';
import './Footer.css';

export const Footer = () => {
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
                  <i className='fa fa-home pr-10' /> г. Ахангаран, СЭЗ &quot;Ангрен&quot;,
                  <br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ПРОМЗОНА
                </p>
                <p>
                  <a href='tel:(998 99) 884 87 57' className='fa fa-mobile pr-10'>
                    (998 99) 884 87 57
                  </a>
                </p>
                <p>
                  <a href='tel:(998 71) 205 10 07' className='fa fa-mobile pr-10'>
                    (998 71) 205 10 07
                  </a>
                </p>
                <p>
                  <a href='tel:(998 70) 202 07 00' className='fa fa-mobile pr-10'>
                    (998 70) 202 07 00
                  </a>
                </p>
                <p>
                  <i className='fa fa-envelope pr-10' />
                  <a href='mailto:info@dalheavy.uz'>info@dalheavy.uz</a>
                </p>
              </address>
            </div>

            <div className='col-lg-3 col-sm-3'>
              <div className='page-footer wow fadeInUp' data-wow-duration='2s' data-wow-delay='.5s'>
                <h1>меню</h1>
                <ul className='page-footer-list'>
                  <li>
                    <i className='fa fa-angle-right' />
                    <a href='index.html'>Главная</a>
                  </li>
                  <li>
                    <i className='fa fa-angle-right' />
                    <a href='folio.html'>Портфолио</a>
                  </li>
                  <li>
                    <i className='fa fa-angle-right' />
                    <a href='equipment.html'>Оборудование завода</a>
                  </li>
                  <li>
                    <i className='fa fa-angle-right' />
                    <a href='practice.html'>Применение</a>
                  </li>
                  <li>
                    <i className='fa fa-angle-right' />
                    <a href='info.html'>Наши референсы</a>
                  </li>
                  <li>
                    <i className='fa fa-angle-right' />
                    <a href='contact.html'>Контакты</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
