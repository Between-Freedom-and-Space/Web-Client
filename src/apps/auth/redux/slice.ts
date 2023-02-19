import {AuthState, SignInState, SignUpState, VerificationCodeState} from "./types";
import {createSlice} from "@reduxjs/toolkit";
import {
    onSignInNicknameChanged,
    onSignInPasswordChanged, onSignUpFormFieldValueChanged,
    sendVerificationCodeThunk,
    signInThunk,
    signUpThunk
} from "./reducer";

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
    verificationCodeState: VerificationCodeState.NOT_SEND,
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
                state.state = AuthState.AUTHENTICATED
            })
            .addCase(signInThunk.rejected, (state, action) => {
                state.state = AuthState.NOT_AUTHENTICATED
            })
    }
})

export const authSignUpSlice = createSlice({
    name: 'auth-sign-up',
    initialState: initialSignUpState,
    reducers: {
        formFieldValueChanged: onSignUpFormFieldValueChanged,
    },
    extraReducers: (builder) => {
        builder.addCase(signUpThunk.pending, (state, action) => {
            state.state = AuthState.LOADING
        })
        builder.addCase(signUpThunk.rejected, (state, action) => {
            state.state = AuthState.NOT_AUTHENTICATED
        })
        builder.addCase(signUpThunk.fulfilled, (state, action) => {

        })

        builder.addCase(sendVerificationCodeThunk.pending, (state, action) => {
            state.verificationCodeState = VerificationCodeState.SENDING
        })
        builder.addCase(sendVerificationCodeThunk.rejected, (state, action) => {
            state.verificationCodeState = VerificationCodeState.NOT_SEND
        })
        builder.addCase(sendVerificationCodeThunk.fulfilled, (state, action) => {

        })
    }
})

export const signInActions = authSignInSlice.actions
export const signUpActions = authSignUpSlice.actions