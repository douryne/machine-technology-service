/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './ContactsPlate.css';

export const ContactsPlate = (props) => {
  return (
    <div className='contactsPlate'>
      <h4 className='contactsPlate__title'>
        {props.title}
        {props.element}
      </h4>
      <p className='contactsPlate__text'>{props.text}</p>
    </div>
  );
};
