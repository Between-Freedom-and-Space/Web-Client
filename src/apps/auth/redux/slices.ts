import {
    AuthState,
    PasswordRecoverFlowState,
    RecoverPasswordState,
    SignInState,
    SignUpState,
    VerificationCodeState
} from "./types";
import {createSlice} from "@reduxjs/toolkit";
import {
    onSignInNicknameChanged,
    onSignInPasswordChanged,
    onSignUpFormFieldValueChanged,
    sendVerificationCodeThunk,
    signInErrorMessageShown,
    signInThunk,
    signUpErrorMessageShown,
    signUpThunk
} from "./auth-reducers";
import {PasswordRecoverChangeState} from "../components/passwrod-recover/password-change/types";
import {
    checkVerificationCodeThunk,
    onNewPasswordChanged,
    onRecoverEmailChanged, onRecoverPasswordErrorShown,
    onRepeatedNewPasswordChanged,
    onVerificationCodeChanged, recoverPasswordThunk
} from "./recover-password-reducers";

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
    passwordChangeState: PasswordRecoverChangeState.IN_PROGRESS,
    timeRemainedSeconds: 0,
    errorMessage: undefined,
    flowState: PasswordRecoverFlowState.ENTERING_EMAIL,
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
        emailChanged: onRecoverEmailChanged,
        verificationCodeChanged: onVerificationCodeChanged,
        newPasswordChanged: onNewPasswordChanged,
        repeatedNewPasswordChanged: onRepeatedNewPasswordChanged,
        errorShown: onRecoverPasswordErrorShown,
    },
    extraReducers: (builder) => {
        builder.addCase(sendVerificationCodeThunk.pending, () => {

        })
        builder.addCase(sendVerificationCodeThunk.rejected, () => {

        })
        builder.addCase(sendVerificationCodeThunk.fulfilled, () => {

        })

        builder.addCase(checkVerificationCodeThunk.pending, () => {

        })
        builder.addCase(checkVerificationCodeThunk.rejected, () => {

        })
        builder.addCase(checkVerificationCodeThunk.fulfilled, () => {

        })

        builder.addCase(recoverPasswordThunk.pending, () => {

        })
        builder.addCase(recoverPasswordThunk.rejected, () => {

        })
        builder.addCase(recoverPasswordThunk.fulfilled, () => {

        })
    }
})

export const signInActions = authSignInSlice.actions
export const signUpActions = authSignUpSlice.actions
export const recoverPasswordActions = recoverPasswordSlice.actions