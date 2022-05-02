import React from 'react';

import './Blog.css';

export const Blog = ({ image, text, title }) => {
  return (
    <div className='blog wow fadeInLeft animated'>
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
