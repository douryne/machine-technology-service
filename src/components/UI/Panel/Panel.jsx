import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SliderItem } from '../Slider/SliderItem';

import './Panel.css';

export const Panel = ({ children }) => {
  const portfolio = useLocation();

  const [open, setOpen] = useState(true);

  return (
    <div className='panel panel-default'>
      <button type='button' onClick={() => setOpen(!open)} className='panel-heading panel-heading-faq'>
        <h4 className='panel-title'>{children}</h4>
      </button>

      <div id='collapseThirty' className={open ? 'panel-collapse collapse' : 'panel-collapse collapse in'}>
        {portfolio.pathname === '/portfolio' && <SliderItem />}
      </div>
    </div>
  );
};
