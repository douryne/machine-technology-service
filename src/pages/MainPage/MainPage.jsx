import './MainPage.css';
import React from 'react';
import { ProfEquipment, SphereSection } from '../../components';

export const MainPage = () => {
  return (
    <div>
      <SphereSection textType='short' />
      <ProfEquipment />
    </div>
  );
};
