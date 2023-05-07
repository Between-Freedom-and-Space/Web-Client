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
import FeedPage from "../pages/feed/feed.page";
import RecoverPasswordPage from "../pages/recover-password/recover-password.page";
import SettingsPage from "../pages/settings/settings.page";
import SearchPage from "../pages/search/search.page";
import PostPage from "../pages/post/post.page";
import {Provider} from "react-redux";
import {store} from "../config/redux.config";
import Page from "../apps/page/page";

function Entry () {
    return (
        <Provider store={store}>
            <Routes>
                <Route path='/' element={<Page/>}>
                    <Route index path='/' element={<AboutPage/>}/>
                    <Route path='/home' element={<HomePage/>}/>
                    <Route path='/profile/:profileId' element={<ProfilePage/>}/>
                    <Route path='/error' element={<ErrorPage/>}/>
                    <Route path='/authenticate' element={<AuthenticatePage/>}/>
                    <Route path='/password-recover' element={<RecoverPasswordPage/>}/>
                    <Route path='/comment' element={<CommentPage/>}/>
                    <Route path='/feed' element={<FeedPage/>}/>
                    <Route path='/settings' element={<SettingsPage/>}/>
                    <Route path='/post/create-new' element={<EditorPage />}/>
                    <Route path='/post/:postId' element={<PostPage />}/>
                    <Route path='/search/:searchText' element={<SearchPage/>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Route>
            </Routes>
        </Provider>
    )
}

export default Entry
