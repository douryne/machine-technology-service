import React from 'react';
import { Link } from 'react-router-dom';
import { useAnimations } from '../../../hooks/useAnimations';

import './SphereCardMainVer.css';

export const SphereCardMainVer = ({ cardUrl, cardTitle, cardText, cardRoute }) => {
  useAnimations();

  return (
    <article data-aos='fade-up' className='sphereCard'>
      <img src={cardUrl} alt={cardTitle} className='sphereCard__image' />
      <div>
        <h3 className='sphereCard__title'>{cardTitle}</h3>
        <p className='sphereCard__text'>{cardText}</p>
      </div>
      <Link to={cardRoute} className='sphereCard__link'>
        подробнее
      </Link>
    </article>
  );
};
