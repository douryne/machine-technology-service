/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from 'react';
import './ContactsBtn.css';

export const ContactsBtn = (props) => {
  return (
    <button type={props.type} className='contactsBtn'>
      {props.text}
    </button>
  );
};
