import React from 'react';
import { Link } from 'react-router-dom';
import './SphereCard.css';

export const SphereCard = ({ cardUrl, cardTitle, cardText, cardRoute }) => {
  return (
    <article className='sphereCard'>
      <img src={cardUrl} alt={cardTitle} className='sphereCard__image' />
      <h3 className='sphereCard__title'>{cardTitle}</h3>
      <p className='sphereCard__text'>{cardText}</p>
      <Link to={cardRoute} className='sphereCard__link'>
        подробнее
      </Link>
    </article>
  );
};
