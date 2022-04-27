import React from 'react';
import { Panel, PanelGroup } from 'rsuite';
import { aboutProjectInfo } from '../../utils/aboutProjectInfo';
import { BlueTitle } from '..';

import 'rsuite/dist/rsuite.min.css';
import './AboutProject.css';

export const AboutProject = () => {
  const articles = aboutProjectInfo;
  return (
    <section className='aboutProject'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <PanelGroup className='aboutProject__panel-gruop' accordion>
        {articles.length ? (
          articles.map((article) => (
            <div key={article.title} className='aboutProject__list-item'>
              <Panel className='aboutProject__panel' header={article.title} shaded>
                <p className='aboutProject__list-text'>{article.text}</p>
              </Panel>
            </div>
          ))
        ) : (
          <BlueTitle importance={1}>Что-то пошло не так</BlueTitle>
        )}
      </PanelGroup>
    </section>
  );
};
