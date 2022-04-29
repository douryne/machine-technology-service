import React from 'react';
import { useAnimations } from '../../../hooks/useAnimations';

import './PageTitle.css';

export const PageTitle = ({ children }) => {
  useAnimations();
  return (
    <div data-aos='fade-right' className='breadcrumbs'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-sm-4'>
            <h1>{children}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
