import {SignInState, SignUpState} from "./types";
import {createSlice} from "@reduxjs/toolkit";
import {
    OnSendVerificationCodeClicked,
    onSignInClicked,
    onSignInNicknameChanged,
    onSignInPasswordChanged,
    onSignUpClicked, OnSignUpFormFieldValueChanged
} from "./reducers";

const initialSignInState: SignInState = {
    nickname: '',
    password: '',
    isLoggedIn: false,
}
const initialSignUpState: SignUpState = {
    nickname: '',
    email: '',
    phoneNumber: '',
    password: '',
    description: '',
    location: '',
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
        signUp: onSignUpClicked,
        sendVerificationCode: OnSendVerificationCodeClicked,
        signUpFormChanged: OnSignUpFormFieldValueChanged,
    }
})

export const signInActions = authSignInSlice.actions
export const signUpActions = authSignUpSlice.actions

export default {}