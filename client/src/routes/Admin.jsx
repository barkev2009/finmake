import React, { useEffect, useState } from 'react';
import { $authHost } from '../api';

const Admin = () => {

  const [raw, setRaw] = useState('');

  useEffect(
    () => {
      $authHost.get('api/callRequest').then(
        ({ data: { payload } }) => {
          setRaw(JSON.stringify(payload, false, 2));
        }
      )
    }, []
  );

  return (
    <div>
      <h1>ADMIN</h1>
      <p>{raw}</p>
    </div>
  )
}

export default Admin