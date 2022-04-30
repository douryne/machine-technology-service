import React from 'react';
import { PageTitle, ScrollToTopBtn, Panels, SliderItem } from '../../components';
import { portfolioPanelsContent } from '../../utils/portfolioPanelsContent';

import './MainPortfolio.css';

export const MainPortfolio = () => {
  return (
    <div>
      <PageTitle>НАШЕ ПОРТФОЛИО</PageTitle>
      <div className='row'>
        <div className='col-md-12'>
          <div className='container'>
            <Panels headings={portfolioPanelsContent} content={<SliderItem />} />
          </div>
        </div>
      </div>
      <ScrollToTopBtn />
    </div>
  );
};
