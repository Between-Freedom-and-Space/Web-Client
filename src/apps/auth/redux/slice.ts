import {AuthState, RecoverPasswordState, SignInState, SignUpState, VerificationCodeState} from "./types";
import {createSlice} from "@reduxjs/toolkit";
import {
    onSignInNicknameChanged,
    onSignInPasswordChanged, onSignUpFormFieldValueChanged,
    sendVerificationCodeThunk, signInErrorMessageShown,
    signInThunk, signUpErrorMessageShown,
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
const initialRecoverPasswordState: RecoverPasswordState = {
    email: '',
    recoverCode: '',
    newPassword: '',
    newPasswordRepeated: '',
}

export const authSignInSlice = createSlice({
    name: 'auth-sign-in',
    initialState: initialSignInState,
    reducers: {
        passwordFieldChanged: onSignInPasswordChanged,
        nicknameFieldChanged: onSignInNicknameChanged,
        errorShown: signInErrorMessageShown,
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInThunk.pending, (state) => {
                state.state = AuthState.LOADING
            })
            .addCase(signInThunk.fulfilled, (state) => {
                state.state = AuthState.AUTHENTICATED
            })
            .addCase(signInThunk.rejected, (state, action) => {
                state.state = AuthState.NOT_AUTHENTICATED
                state.errorMessage = action.payload
            })
    }
})

export const authSignUpSlice = createSlice({
    name: 'auth-sign-up',
    initialState: initialSignUpState,
    reducers: {
        formFieldValueChanged: onSignUpFormFieldValueChanged,
        errorShown: signUpErrorMessageShown,
    },
    extraReducers: (builder) => {
        builder.addCase(signUpThunk.pending, (state) => {
            state.state = AuthState.LOADING
        })
        builder.addCase(signUpThunk.rejected, (state, action) => {
            state.state = AuthState.NOT_AUTHENTICATED
            state.errorMessage = action.payload
        })
        builder.addCase(signUpThunk.fulfilled, (state) => {
            state.state = AuthState.AUTHENTICATED
        })

        builder.addCase(sendVerificationCodeThunk.pending, (state) => {
            state.verificationCodeState = VerificationCodeState.SENDING
        })
        builder.addCase(sendVerificationCodeThunk.rejected, (state, action) => {
            state.verificationCodeState = VerificationCodeState.NOT_SEND
            state.errorMessage = action.payload
        })
        builder.addCase(sendVerificationCodeThunk.fulfilled, (state) => {
            state.verificationCodeState = VerificationCodeState.SEND
        })
    }
})

export const recoverPasswordSlice = createSlice({
    name: 'auth-recover-password',
    initialState: initialRecoverPasswordState,
    reducers: {

    }
})

export const signInActions = authSignInSlice.actions
export const signUpActions = authSignUpSlice.actions
export const recoverPasswordActions = recoverPasswordSlice.actions