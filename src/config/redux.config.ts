import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authSignInSlice, authSignUpSlice} from "../apps/auth/redux/slice";

export const store = configureStore({
    reducer: combineReducers({
        authSignIn: authSignInSlice.reducer,
        authSignUp: authSignUpSlice.reducer,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch