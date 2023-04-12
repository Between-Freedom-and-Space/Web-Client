import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authSignInSlice, authSignUpSlice, recoverPasswordSlice} from "../apps/auth/redux/slices";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {notificationsSlice} from "../common/services/notifications/redux/slice";
import {settingsSlice} from "../apps/settings/redux/slices";
import {feedSlice} from "../apps/feed/redux/slices";
import {profileSlice} from "../apps/profile/redux/slices";
import {searchSlice} from "../apps/search/redux/slices";
import {postCompleteSlice} from "../apps/posts/redux/complete-slice";

export const store = configureStore({
    reducer: combineReducers({
        authSignIn: authSignInSlice.reducer,
        authSignUp: authSignUpSlice.reducer,
        recoverPassword: recoverPasswordSlice.reducer,
        settings: settingsSlice.reducer,
        feed: feedSlice.reducer,
        profile: profileSlice.reducer,
        search: searchSlice.reducer,
        postComplete: postCompleteSlice.reducer,
        notifications: notificationsSlice.reducer,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector