import {AuthState, SignInState, SignUpState} from "./types";
import {createSlice} from "@reduxjs/toolkit";
import {onSignInNicknameChanged, onSignInPasswordChanged, signInThunk, signUpThunk} from "./reducer";

const initialSignInState: SignInState = {
    nickname: '',
    password: '',
    state: AuthState.NOT_AUTHENTICATED
}
const initialSignUpState: SignUpState = {
    nickname: '',
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    repeatedPassword: '',
    description: '',
    location: '',
    verificationCode: '',
    state: AuthState.NOT_AUTHENTICATED
}

export const authSignInSlice = createSlice({
    name: 'auth-sign-in',
    initialState: initialSignInState,
    reducers: {
        passwordFieldChanged: onSignInPasswordChanged,
        nicknameFieldChanged: onSignInNicknameChanged,
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInThunk.pending, (state, action) => {
                state.state = AuthState.LOADING
            })
            .addCase(signInThunk.fulfilled, (state, action) => {

            })
            .addCase(signInThunk.rejected, (state, action) => {

            })
    }
})

export const authSignUpSlice = createSlice({
    name: 'auth-sign-up',
    initialState: initialSignUpState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(signUpThunk.pending, (state, action) => {

        })
    }
})

export const signInActions = authSignInSlice.actions
export const signUpActions = authSignUpSlice.actions