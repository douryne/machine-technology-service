import React from 'react';
import './ContactsPlateGroup.css';
import { ContactsPlate } from '../ContactsPlate/ContactsPlate';
import { Button } from '../Button/Button';

export const ContactsPlateGroup = () => {
  return (
    <div className='contactsPlateGroup'>
      <ContactsPlate
        title='адрес'
        element={
          <a
            style={{ marginLeft: '20px' }}
            target='_blank'
            href='https://www.google.com/maps/place/%D0%91%D1%83%D1%81%D1%82%D0%B0%D0%BD,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@40.696887,69.2173758,17.24z/data=!4m5!3m4!1s0x38ae1ec1e246df7f:0xbe3c166f2c5798ca!8m2!3d40.6986088!4d69.2192128'
            rel='noreferrer'
          >
            <Button type='button' buttonStyle='btn--normal--green'>
              Геолокация
            </Button>
          </a>
        }
        text='Республика Узбекистан, Ташкентская область,
                  110100&nbsp;г. Алмалык пос. Бустон'
      />
      <ContactsPlate
        title='Режим работы'
        text='Пн - Сб с 8 00 до 17 00
                  Воскресенье - выходной'
      />
      <ContactsPlate
        title='Телефоны'
        text={
          <>
            <a className='plate-link' href='/'>
              (998 93) 500 65 32
            </a>
            <br />
            <a className='plate-link' href='/'>
              (998 94) 624 68 75
            </a>
          </>
        }
      />
      <ContactsPlate
        title='email'
        text={
          <a className='plate-link' href='/'>
            dilshod.h84@gmail.com
          </a>
        }
      />
    </div>
  );
};
