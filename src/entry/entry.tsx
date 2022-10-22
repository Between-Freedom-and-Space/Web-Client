import React from 'react';
import './entry.css';

// For development mode
import HomePage from '../pages/home.page';
import ProfilePage from '../pages/profile.page';
import ErrorPage from '../pages/error.page';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// For production mode
import FailStatusView from '../common/components/fail-status-view/fail-status-view';
import { FailType } from '../common/components/fail-status-view/types';

function Entry() {

  if (process?.env?.NODE_ENV === 'development' || process?.env?.STAGE === 'dev') {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomePage/>}/>
          <Route path='/profile/:uid' element={<ProfilePage/>}/>
          <Route path='/404' element={<ErrorPage/>}/>
          <Route path='*' element={<Navigate to='/404'/>}/>
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <FailStatusView failType={FailType.ServiceUnavalible}/>
  );
}

export default Entry;
