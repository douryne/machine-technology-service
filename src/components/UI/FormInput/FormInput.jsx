/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './FormInput.css';

export const FormInput = (props) => {
  return (
    <>
      <label className='formInput__label'>{props.label}</label>
      <input type={props.type} name={props.name} className='formInput__input' />
    </>
  );
};
