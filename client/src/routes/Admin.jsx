import React, { useEffect, useState } from 'react';
import { $authHost } from '../api';
import { exportHandler } from '../handlers';
import Commits from '../components/admin/Commits';
import { TABS } from '../const';
import Screens from '../components/admin/Screens';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTab } from '../store/adminSlice';

const Admin = () => {

  const downloadHandler = () => {
    $authHost.get('api/callRequest').then(
      ({ data: { payload } }) => {
        exportHandler(payload);
      }
    )
  }

  const dispatch = useDispatch();
  const currentTab = useSelector(state => state.admin.currentTab);

  useEffect(
    () => {
      dispatch(setCurrentTab(TABS[0]));
    }, []
  );

  const returnTabContent = () => {
    switch (currentTab.id) {
      case 'screens':
        return <Screens />
      case 'commits':
        return <Commits />
      default:
        return null;
    }
  }

  const tabHandler = (e) => {
    dispatch(setCurrentTab(TABS.filter(t => t.id === e.target.id)[0]));
  }

  return (
    <div className='admin_container'>
      <h1>ADMIN</h1>
      <button onClick={downloadHandler}>Скачать отчет</button>
      <div className="tabs">
        {
          TABS.map(tab => <div onClick={tabHandler} key={tab.id} id={tab.id} className={"tab " + (tab.id === currentTab.id ? 'active' : '')}>{tab.name}</div>)
        }
      </div>
      {returnTabContent()}
    </div>
  )
}

export default Admin