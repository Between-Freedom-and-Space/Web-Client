import {RecoverPasswordState} from "./types";
import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import authDependenciesContainer from "../di/inversify.config";
import {RecoverPasswordUseCase} from "../domain/usecases/recover-password/recover-password.usecase";
import {
    CheckVerificationCodeResult, RecoverPasswordFailure, RecoverPasswordResult,
    SendVerificationCodeResult
} from "../domain/usecases/recover-password/recover-password-usecase.types";
import {RootState} from "../../../config/redux.config";

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

export const sendVerificationCodeThunk = createAsyncThunk<
    SendVerificationCodeResult,
    undefined,
    {rejectValue: string, state: RootState}
    >(
    'recover-password/send-verification-code',
    async (_, {rejectWithValue, getState}) => {
        const useCase = container.get<RecoverPasswordUseCase>(RecoverPasswordUseCase)
        const state = getState().recoverPassword

        const result = await useCase.sendVerificationCode(state.email)
        if (result.type === 'failure') {
            return rejectWithValue(result.message!)
        } else {
            return result
        }
    }
)

export const checkVerificationCodeThunk = createAsyncThunk<
    CheckVerificationCodeResult,
    undefined,
    {rejectValue: string, state: RootState}
    >(
    'recover-password/check-verification-code',
    async (_, {rejectWithValue, getState}) => {
        const useCase = container.get<RecoverPasswordUseCase>(RecoverPasswordUseCase)
        const state = getState().recoverPassword

        const result = await useCase.checkVerificationCode(state.email, state.recoverCode)
        if (result.type === 'rejected') {
            return rejectWithValue(result.message!)
        } else {
            return result
        }
    }
)

export const recoverPasswordThunk = createAsyncThunk<
    RecoverPasswordResult,
    void,
    {rejectValue: string, state: RootState}
    >(
    'recover-password/set-new-password',
    async (_, {rejectWithValue, getState}) => {
        const useCase = container.get<RecoverPasswordUseCase>(RecoverPasswordUseCase)
        const state = getState().recoverPassword

        const result = await useCase.recoverPassword({
            ...state,
            verificationCode: state.recoverCode,
            repeatedNewPassword: state.newPasswordRepeated
        })
        if (result.type === 'failure') {
            return rejectWithValue((result as RecoverPasswordFailure).message)
        } else {
            return result
        }
    }
)