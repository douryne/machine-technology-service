import React from 'react';
import { Panel, PageTitle } from '../../components';

import './MainPortfolio.css';

export const MainPortfolio = () => {
  return (
    <div>
      <PageTitle>НАШЕ ПОРТФОЛИО</PageTitle>
      <div className='row'>
        <div className='col-md-12'>
          <div className='container'>
            <div className='panel-group wow fadeInUp animated'>
              <Panel>&quot;AKFA&quot;. НАМАНГАН</Panel>
              <Panel>ЗАВОД &quot;KNAUF&quot; В ФЕРГАНЕ</Panel>
              <Panel>АНГРЕН. БУНКЕР ДЛЯ МОЮЩИХ СТРЕДСТВ</Panel>
              <Panel>VEKTAN CHEMICAL</Panel>
              <Panel>IES &quot;Uzbekgidroqurilish&quot; В ФЕРГАНЕ</Panel>
              <Panel>ТУРКЕСТАНСКИЙ АЭРОПОРТ &quot;YDA&quot; В КАЗАХСТАНЕ</Panel>
              <Panel>CП ООО &quot;HIGN LAND CITY&quot;(AKFA GROUP)</Panel>
              <Panel>ООО &quot;GREEN LINE PROFIL&quot; (BENKAM)</Panel>
              <Panel>ИП OOO &quot;METAL INVENT&quot;(ORIENT GROUP)</Panel>
              <Panel>СП ООО &quot;STARGATE SYSTEMS&quot;(AKFA GROUP)</Panel>
              <Panel>АО &quot;UZBEKGIDROENERGOQURILISH&quot; </Panel>
              <Panel>КОМПАНИЯ-ЗАКАЗЧИК &quot;SOFYA STROY&quot;. ЁМКОСТИ ДЛЯ КОМПАНИИ &quot;ЛУКОЙЛ&quot;</Panel>
              <Panel>АО «NAVOIYAZOT» - ПРОИЗВОДИТЕЛЬ ХИМПРОДУКЦИИ</Panel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
