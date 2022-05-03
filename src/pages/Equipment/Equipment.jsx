import React from 'react';
import { Panel, PageTitle } from '../../components';
import { Blog } from '../../components/UI/Blog/Blog';
import { bloginfo } from '../../utils/equipmentPageData';

import './Equipment.css';

export const Equipment = () => {
  return (
    <div className='mainEquipment'>
      <PageTitle>ОБОРУДОВАНИЕ</PageTitle>
      <div className='container'>
        <div className='mainEquipment-blog'>
          {bloginfo.map((blog) => (
            <Blog key={blog.id} image={blog.image} title={blog.title} text={blog.text} />
          ))}
        </div>
        <Panel>ПОЛНЫЙ ПЕРЕЧЕНЬ ОБОРУДОВАНИЯ</Panel>
      </div>
    </div>
  );
};
