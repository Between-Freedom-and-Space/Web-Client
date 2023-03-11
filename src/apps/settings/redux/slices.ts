// noinspection DuplicatedCode

import {createSlice} from "@reduxjs/toolkit";
import {SettingsState} from "./types";
import {
    changeAccountEmailThunk, changeAccountNicknameThunk,
    deleteAccountThunk,
    getAccountSettingsThunk,
    changeAccountVisibilityThunk, onErrorMessageShown, onNewEmailChanged, onNewNicknameChanged
} from "./reducers";
import {ChangeAccountVisibilitySuccess, GetAccountSettingsSuccess} from "../domain/usecases/settings-usecase.types";

const settingsInitialState: SettingsState = {
    isAccountPrivate: false,
    newAccountEmail: '',
    newAccountNickname: '',
    isAccountSettingsLoading: false,
    isAccountDeleting: false,
    isAccountVisibilityChanging: false,
    isNicknameChanging: false,
    isEmailChanging: false,
    errorMessage: undefined
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: settingsInitialState,
    reducers: {
        errorShown: onErrorMessageShown,
        newNicknameChanged: onNewNicknameChanged,
        newEmailChanged: onNewEmailChanged,
    },
    extraReducers: (builder) => {

        builder.addCase(getAccountSettingsThunk.pending, (state) => {
            state.isAccountSettingsLoading = true
        })
        builder.addCase(getAccountSettingsThunk.rejected, (state, action) => {
            state.isAccountSettingsLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(getAccountSettingsThunk.fulfilled, (state, action) => {
            state.isAccountSettingsLoading = false
            state.isAccountPrivate = (action.payload as GetAccountSettingsSuccess).isAccountPrivate
        })

        builder.addCase(changeAccountEmailThunk.pending, (state) => {
            state.isEmailChanging = true
        })
        builder.addCase(changeAccountEmailThunk.rejected, (state, action) => {
            state.isEmailChanging = false
            state.errorMessage = action.payload
        })
        builder.addCase(changeAccountEmailThunk.fulfilled, (state) => {
            state.isEmailChanging = false
            state.newAccountEmail = ''
        })

        builder.addCase(changeAccountVisibilityThunk.pending, (state) => {
            state.isAccountVisibilityChanging = true
        })
        builder.addCase(changeAccountVisibilityThunk.rejected, (state, action) => {
            state.isAccountVisibilityChanging = false
            state.errorMessage = action.payload
        })
        builder.addCase(changeAccountVisibilityThunk.fulfilled, (state, action) => {
            state.isAccountVisibilityChanging = false
            state.isAccountPrivate = (action.payload as ChangeAccountVisibilitySuccess).isAccountPrivate
        })

        builder.addCase(changeAccountNicknameThunk.pending, (state) => {
            state.isNicknameChanging = true
        })
        builder.addCase(changeAccountNicknameThunk.rejected, (state, action) => {
            state.isNicknameChanging = false
            state.errorMessage = action.payload
        })
        builder.addCase(changeAccountNicknameThunk.fulfilled, (state) => {
            state.isNicknameChanging = false
            state.newAccountNickname = ''
        })

        builder.addCase(deleteAccountThunk.pending, (state) => {
            state.isAccountDeleting = true
        })
        builder.addCase(deleteAccountThunk.rejected, (state, action) => {
            state.isAccountDeleting = false
            state.errorMessage = action.payload
        })
        builder.addCase(deleteAccountThunk.fulfilled, (state) => {
            state.isAccountDeleting = false
        })
    }
})

export const settingsActions = settingsSlice.actions