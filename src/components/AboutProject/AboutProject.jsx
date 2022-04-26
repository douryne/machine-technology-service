/* eslint-disable prettier/prettier */
import React from 'react';
import { Panel, PanelGroup } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './AboutProject.css';
import { aboutProjectInfo } from '../../utils/aboutProjectInfo';

export const AboutProject = () => {
  const articles = aboutProjectInfo;
  return (
    <section className='aboutProject'>
      <h2 className='aboutProject__title'>О проекте</h2>
      <PanelGroup className='aboutProject__panel-gruop' accordion>
        {articles.map((article) => {
          return (
            <li className='aboutProject__list-item'>
              <Panel
                className='aboutProject__panel'
                header={article.title}
                shaded
              >
                <p className='aboutProject__list-text'>{article.text}</p>
              </Panel>
            </li>
          );
        })}
      </PanelGroup>
    </section>
  );
};
