import React from 'react';
import './entry.css';

import HomePage from '../pages/home.page';
import ProfilePage from '../pages/profile.page';
import ErrorPage from '../pages/error.page';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function Entry() {

    if (process.env.NODE_ENV !== 'development') {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<ErrorPage/>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </BrowserRouter>
        );
    }

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

export default Entry;
