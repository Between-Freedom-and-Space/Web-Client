import React, {useEffect} from 'react';
import './entry.css';

import HomePage from '../pages/home.page';
import ProfilePage from '../pages/profile.page';
import ErrorPage from '../pages/error.page';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function Entry() {
    useEffect(() => {
        if (window.location.host === 'localhost:3000') {
            window.localStorage.setItem('MODE', 'development')
        }
    }, [])

    if (window.localStorage.getItem('MODE') === 'development') {
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
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<ErrorPage/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Entry;
