/* eslint-disable react/button-has-type */
import React from 'react';
import './Button.css';

const STYLES = ['btn--normal--green', 'btn--bold--green', 'btn--normal--dark-blue', 'btn--bold--dark-blue'];

const SIZES = ['btn--normal', 'btn--small'];

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button type={type} className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick}>
      {children}
    </button>
  );
};
