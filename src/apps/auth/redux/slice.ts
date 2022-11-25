import {SignInState, SignUpState} from "./types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    OnSendVerificationCodeClicked,
    onSignInClicked,
    onSignInNicknameChanged,
    onSignInPasswordChanged,
    onSignUpClicked, OnSignUpFormFieldValueChanged
} from "./reducer";

const initialSignInState: SignInState = {
    nickname: '',
    password: '',
    isLoggedIn: false,
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
    isLoggedIn: false,
}

export const authSignInSlice = createSlice({
    name: 'auth-sign-in',
    initialState: initialSignInState,
    reducers: {
        signIn: onSignInClicked,
        nicknameChanged: onSignInNicknameChanged,
        passwordChanged: onSignInPasswordChanged,
    }
})

export const authSignUpSlice = createSlice({
    name: 'auth-sign-up',
    initialState: initialSignUpState,
    reducers: {
        signUp: createAsyncThunk(
            'auth/sign-up/signUp',
            onSignUpClicked
        ),
        sendVerificationCode: OnSendVerificationCodeClicked,
        signUpFormChanged: OnSignUpFormFieldValueChanged,
    },
    extraReducers: (builder) => {

    }
})

export const signInActions = authSignInSlice.actions
export const signUpActions = authSignUpSlice.actions