import React from 'react';
import { $authHost } from '../api';
import { exportHandler } from '../handlers';

const Admin = () => {

  const downloadHandler = () => {
    $authHost.get('api/callRequest').then(
      ({ data: { payload } }) => {
        exportHandler(payload);
      }
    )
  }

  return (
    <div>
      <h1>ADMIN</h1>
      <button onClick={downloadHandler}>Скачать отчет</button>
    </div>
  )
}

export default Admin