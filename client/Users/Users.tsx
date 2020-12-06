import React, { useEffect } from 'react';
import axios from 'axios';

export const Users = () => {
  useEffect(() => {
    axios.get('/api').then((data) => console.log(data));
  });
  return <div>users</div>;
};
