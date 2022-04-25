const url = 'http://zetweb-wordpress-10.tw1.ru/wp-json/wp/v2';

export const getData = () =>
  fetch(`${url}/posts/45`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
