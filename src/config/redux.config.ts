import {applyMiddleware, combineReducers, configureStore} from "@reduxjs/toolkit";
import {authSignInSlice, authSignUpSlice} from "../apps/auth/redux/slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {notificationsSlice} from "../common/services/notifications/redux/slice";

export const store = configureStore({
    reducer: combineReducers({
        authSignIn: authSignInSlice.reducer,
        authSignUp: authSignUpSlice.reducer,
        notifications: notificationsSlice.reducer,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector