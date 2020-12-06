import React, { useEffect } from 'react';
import axios from 'axios';

export const App = () => {
  useEffect(() => {
    axios.get('/api').then(({ data }) => console.log(data));
  }, []);
  return <div>hello world</div>;
};
