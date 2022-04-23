import './MainPage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProfEquipment } from '../../components/UI/ProfEquipment/ProfEquipment';

export const MainPage = () => {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get('http://zetweb-wordpress-10.tw1.ru/wp-json/wp/v2/pages').then((res) => {
      setPost(res.data[0]);
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='wp'>
          <ProfEquipment />
          <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      )}
    </div>
  );
};
