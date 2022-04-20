import React, { useState } from 'react';
import Slider from 'react-slick/lib/slider';

import './Panel.css';

import img1 from '../../../assets/img/slider/1.jpg';
import img2 from '../../../assets/img/slider/2.jpg';
import img3 from '../../../assets/img/slider/3.jpg';
import img4 from '../../../assets/img/slider/4.jpg';
import img5 from '../../../assets/img/slider/5.jpg';
import img6 from '../../../assets/img/slider/6.jpg';

export const Panel = ({ children }) => {
  const [open, setOpen] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='panel panel-default'>
      <button type='button' onClick={() => setOpen(!open)} className='panel-heading panel-heading-faq'>
        <h4 className='panel-title'>{children}</h4>
      </button>

      <div id='collapseThirty' className={open ? 'panel-collapse collapse' : 'panel-collapse collapse in'}>
        <Slider {...settings}>
          <div>
            <img src={img1} alt='' />
          </div>
          <div>
            <img src={img2} alt='' />
          </div>
          <div>
            <img src={img3} alt='' />
          </div>
          <div>
            <img src={img4} alt='' />
          </div>
          <div>
            <img src={img5} alt='' />
          </div>
          <div>
            <img src={img6} alt='' />
          </div>
        </Slider>
      </div>
    </div>
  );
};
