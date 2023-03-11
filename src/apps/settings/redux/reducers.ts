import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {SettingsState} from "./types";
import settingsDependenciesContainer from "../di/inversify.config";
import {SettingsUseCase} from "../domain/usecases/settings.usecase";
import {
    ChangeAccountEmailResult, ChangeAccountNicknameResult,
    ChangeAccountVisibilityFailure,
    ChangeAccountVisibilityResult, DeleteAccountResult,
    GetAccountSettingsFailure,
    GetAccountSettingsResult
} from "../domain/usecases/settings-usecase.types";
import {RootState} from "../../../config/redux.config";

const container = settingsDependenciesContainer

export function onErrorMessageShown(state: SettingsState): SettingsState {
    return {
        ...state,
        errorMessage: undefined
    }
}

export function onNewNicknameChanged(state: SettingsState, action: PayloadAction<string>): SettingsState {
    return {
        ...state,
        newAccountNickname: action.payload
    }
}

export function onNewEmailChanged(state: SettingsState, action: PayloadAction<string>): SettingsState {
    return {
        ...state,
        newAccountEmail: action.payload
    }
}

export const getAccountSettingsThunk = createAsyncThunk<
    GetAccountSettingsResult,
    void,
    {rejectValue: string}
    >(
    'settings/get-account-settings',
    async (_, {rejectWithValue}) => {
        const useCase = container.get<SettingsUseCase>(SettingsUseCase)

        const result = await useCase.getAccountSettings()

        if (result.type === 'failure') {
            return rejectWithValue((result as GetAccountSettingsFailure).message)
        } else {
            return result
        }
    }
)

export const changeAccountVisibilityThunk = createAsyncThunk<
    ChangeAccountVisibilityResult,
    void,
    {rejectValue: string, state: RootState}
    >(
    'settings/change-account-visibility',
    async (_, {rejectWithValue, getState}) => {
        const useCase = container.get<SettingsUseCase>(SettingsUseCase)
        const state = getState().settings

        const result = await useCase.changeAccountVisibility(!state.isAccountPrivate)

        if (result.type === 'failure') {
            return rejectWithValue((result as ChangeAccountVisibilityFailure).message)
        } else {
            return result
        }
    }
)

export const changeAccountEmailThunk = createAsyncThunk<
    ChangeAccountEmailResult,
    void,
    {rejectValue: string, state: RootState}
    >(
    'settings/change-account-email',
    async (_, {rejectWithValue, getState}) => {
        const useCase = container.get<SettingsUseCase>(SettingsUseCase)
        const state = getState().settings

        const result = await useCase.changeAccountEmail(state.newAccountEmail)

        if (result.type === 'failure') {
            return rejectWithValue(result.message!)
        } else {
            return result
        }
    }
)

export const changeAccountNicknameThunk = createAsyncThunk<
    ChangeAccountNicknameResult,
    void,
    {rejectValue: string, state: RootState}
    >(
    'settings/change-account-nickname',
    async (_, {rejectWithValue, getState}) => {
        const useCase = container.get<SettingsUseCase>(SettingsUseCase)
        const state = getState().settings

        const result = await useCase.changeAccountNickname(state.newAccountNickname)

        if (result.type === 'failure') {
            return rejectWithValue(result.message!)
        } else {
            return result
        }
    }
)

export const deleteAccountThunk = createAsyncThunk<
    DeleteAccountResult,
    void,
    {rejectValue: string}
    >(
    'settings/delete-account',
    async (_, {rejectWithValue}) => {
        const useCase = container.get<SettingsUseCase>(SettingsUseCase)

        const result = await useCase.deleteAccount()

        if (result.type === 'failure') {
            return rejectWithValue(result.message!)
        } else {
            return result
        }
    }
)