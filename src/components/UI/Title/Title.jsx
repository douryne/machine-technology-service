import React from 'react';

import './Title.css';

export const Title = ({ children }) => {
  return (
    <div className='breadcrumbs'>
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
