import React from 'react';
import { useAnimations } from '../../../hooks/useAnimations';

import './Blog.css';

export const Blog = ({ image, text, title }) => {
  useAnimations();
  return (
    <div data-aos='fade-down-right' className='blog wow fadeInLeft animated'>
      <div className='blog-img'>
        <img src={image} alt='' />
      </div>
      <div className='blog-content'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
