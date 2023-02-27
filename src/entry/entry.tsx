import React, { useEffect } from 'react'
import './entry.css'

import HomePage from '../pages/home/home.page'
import ProfilePage from '../pages/profile/profile.page'
import ErrorPage from '../pages/error/error.page'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import EditorPage from '../pages/editor/editor.page'
import AboutPage from '../pages/about/about.page'
import AuthenticatePage from '../pages/authenticate/authenticate.page'
import CommentPage from "../pages/comment/comment.page";

function Entry () {
    useEffect(() => {
        if (window.location.host === 'localhost:3000') {
            window.localStorage.setItem('MODE', 'development')
        }
    }, [])

    if (window.localStorage.getItem('MODE') === 'development') {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index path='/' element={<AboutPage/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                    <Route path='/editor' element={<EditorPage/>}/>
                    <Route path='/error' element={<ErrorPage/>}/>
                    <Route path='/authenticate' element={<AuthenticatePage/>}/>
                    <Route path='/comment' element={<CommentPage/>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<AboutPage/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
                <Route path='/editor' element={<EditorPage/>}/>
                <Route path='/error' element={<ErrorPage/>}/>
                <Route path='/authenticate' element={<AuthenticatePage/>}/>
                <Route path='/comment' element={<CommentPage/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Entry
