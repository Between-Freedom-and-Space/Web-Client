import {RecoverPasswordState} from "./types";
import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import authDependenciesContainer from "../di/inversify.config";
import {RecoverPasswordUseCase} from "../domain/usecases/recover-password/recover-password.usecase";

const container = authDependenciesContainer

export function onRecoverPasswordErrorShown(
    state: RecoverPasswordState
): RecoverPasswordState {
    return {
        ...state,
        errorMessage: undefined,
    }
}

export function onRecoverEmailChanged(
    state: RecoverPasswordState,
    action: PayloadAction<string>
): RecoverPasswordState {
    return {
        ...state,
        email: action.payload
    }
}

export function onVerificationCodeChanged(
    state: RecoverPasswordState,
    action: PayloadAction<string>
): RecoverPasswordState {
    return {
        ...state,
        recoverCode: action.payload
    }
}

export function onNewPasswordChanged(
    state: RecoverPasswordState,
    action: PayloadAction<string>
): RecoverPasswordState {
    const useCase = container.get<RecoverPasswordUseCase>(RecoverPasswordUseCase)

    const newPasswordsState = useCase.getPasswordRecoverChangeState(
        action.payload, state.newPasswordRepeated
    )
    return {
        ...state,
        newPassword: action.payload,
        passwordChangeState: newPasswordsState
    }
}

export function onRepeatedNewPasswordChanged(
    state: RecoverPasswordState,
    action: PayloadAction<string>
): RecoverPasswordState {
    const useCase = container.get<RecoverPasswordUseCase>(RecoverPasswordUseCase)

    const newPasswordsState = useCase.getPasswordRecoverChangeState(
        state.newPassword, action.payload
    )
    return {
        ...state,
        newPasswordRepeated: action.payload,
        passwordChangeState: newPasswordsState
    }
}

export const sendVerificationCodeThunk = createAsyncThunk(
    'recover-password/send-verification-code',
    async () => {

    }
)

export const checkVerificationCodeThunk = createAsyncThunk(
    'recover-password/check-verification-code',
    async () => {

    }
)

export const recoverPasswordThunk = createAsyncThunk(
    'recover-password/set-new-password',
    async () => {

    }
)