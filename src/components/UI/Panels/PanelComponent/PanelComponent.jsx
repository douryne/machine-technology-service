import React from 'react';
import { Panel } from 'rsuite';

import classes from './PanelComponent.module.css';

export const PanelComponent = ({ title, children }) => {
  return (
    <Panel className={classes.panel} header={title} shaded>
      {children}
    </Panel>
  );
};
