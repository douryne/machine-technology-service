import React from 'react';
import { PageTitle, ScrollToTopBtn, Panels, SliderItem } from '../../components';
import { portfolioPanelsContent } from '../../utils/portfolioPanelsContent';

import './MainPortfolio.css';

export const MainPortfolio = () => {
  return (
    <div>
      <PageTitle>НАШЕ ПОРТФОЛИО</PageTitle>
      <div className='container'>
        <Panels content={portfolioPanelsContent}>
          <SliderItem />
        </Panels>
      </div>
      <ScrollToTopBtn />
    </div>
  );
};
