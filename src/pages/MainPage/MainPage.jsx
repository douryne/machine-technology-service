import './MainPage.css';
import React from 'react';
import { ProfEquipment, SpheresMainVer, AboutProject, MainSlider, CarouselComponent } from '../../components';

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
