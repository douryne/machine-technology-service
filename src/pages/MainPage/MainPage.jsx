import './MainPage.css';
import React from 'react';
import { MainSlider, SpheresMainVer, ProfEquipment, CarouselComponent, AboutProject } from '../../components';

export const MainPage = () => {
  return (
    <div>
      <MainSlider />
      <SpheresMainVer />
      <ProfEquipment />
      <CarouselComponent />
      <AboutProject />
    </div>
  );
};
