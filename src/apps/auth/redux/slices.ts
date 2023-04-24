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
    checkVerifiedCodeThunk,
    sendVerifiedCodeThunk,
    onNewPasswordChanged,
    onRecoverEmailChanged, onRecoverPasswordErrorShown,
    onRepeatedNewPasswordChanged,
    onVerificationCodeChanged, recoverPasswordThunk
} from "./recover-password-reducers";
import {SignUpSuccess} from "../domain/usecases/sign-up/sign-up-usecase.types";
import {SignInResultSuccess} from "../domain/usecases/sign-in/sign-in-usecase.types";

const initialSignInState: SignInState = {
    profileId: 0,
    nickname: '',
    password: '',
    state: AuthState.NOT_AUTHENTICATED
}
const initialSignUpState: SignUpState = {
    profileId: 0,
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
    isVerifiedCodeSending: false,
    isVerifiedCodeChecking: false,
    isPasswordRecovering: false
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
            .addCase(signInThunk.fulfilled, (state, action) => {
                state.state = AuthState.AUTHENTICATED
                state.profileId = (action.payload as SignInResultSuccess).profileId
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
        builder.addCase(signUpThunk.fulfilled, (state, action) => {
            state.state = AuthState.AUTHENTICATED
            state.profileId = (action.payload as SignUpSuccess).profileId
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
        builder.addCase(sendVerifiedCodeThunk.pending, (state) => {
            state.isVerifiedCodeSending = true
        })
        builder.addCase(sendVerifiedCodeThunk.rejected, (state, action) => {
            state.errorMessage = action.payload
            state.isVerifiedCodeSending = false
        })
        builder.addCase(sendVerifiedCodeThunk.fulfilled, (state) => {
            state.flowState = PasswordRecoverFlowState.ENTERING_VERIFICATION_CODE
            state.isVerifiedCodeSending = false
        })

        builder.addCase(checkVerifiedCodeThunk.pending, (state) => {
            state.isVerifiedCodeChecking = true
        })
        builder.addCase(checkVerifiedCodeThunk.rejected, (state, action) => {
            state.errorMessage = action.payload
            state.isVerifiedCodeChecking = false
        })
        builder.addCase(checkVerifiedCodeThunk.fulfilled, (state) => {
            state.flowState = PasswordRecoverFlowState.INPUT_NEW_PASSWORD
            state.isVerifiedCodeChecking = false
        })

        builder.addCase(recoverPasswordThunk.pending, (state) => {
            state.isPasswordRecovering = true
        })
        builder.addCase(recoverPasswordThunk.rejected, (state, action) => {
            state.errorMessage = action.payload
            state.isPasswordRecovering = false
        })
        builder.addCase(recoverPasswordThunk.fulfilled, (state) => {
            state.flowState = PasswordRecoverFlowState.RECOVER_FINISHED
            state.isPasswordRecovering = false
        })
    }
})

export const signInActions = authSignInSlice.actions
export const signUpActions = authSignUpSlice.actions
export const recoverPasswordActions = recoverPasswordSlice.actions