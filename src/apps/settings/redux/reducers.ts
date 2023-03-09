import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {SettingsState} from "./types";
import settingsDependenciesContainer from "../di/inversify.config";
import {SettingsUseCase} from "../domain/usecases/settings.usecase";

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

export const getAccountSettingsThunk = createAsyncThunk(
    'settings/get-account-settings',
    async () => {
        const useCase = container.get<SettingsUseCase>(SettingsUseCase)
    }
)

export const makeAccountPrivateThunk = createAsyncThunk(
    'settings/make-account-private',
    async () => {
        const useCase = container.get<SettingsUseCase>(SettingsUseCase)
    }
)

export const changeAccountEmailThunk = createAsyncThunk(
    'settings/change-account-email',
    async () => {
        const useCase = container.get<SettingsUseCase>(SettingsUseCase)
    }
)

export const changeAccountNicknameThunk = createAsyncThunk(
    'settings/change-account-nickname',
    async () => {
        const useCase = container.get<SettingsUseCase>(SettingsUseCase)
    }
)

export const deleteAccountThunk = createAsyncThunk(
    'settings/delete-account',
    async () => {
        const useCase = container.get<SettingsUseCase>(SettingsUseCase)
    }
)