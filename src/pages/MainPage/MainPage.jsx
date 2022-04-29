import './MainPage.css';
import React from 'react';
import { Preview, SpheresMainVer, ProfEquipment, CarouselComponent, AboutProject } from '../../components';

export const MainPage = () => {
  return (
    <div>
      <Preview />
      <SpheresMainVer />
      <ProfEquipment />
      <CarouselComponent />
      <AboutProject />
    </div>
  );
};
