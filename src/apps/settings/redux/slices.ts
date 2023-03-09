import {createSlice} from "@reduxjs/toolkit";
import {SettingsState} from "./types";
import {
    changeAccountEmailThunk, changeAccountNicknameThunk,
    deleteAccountThunk,
    getAccountSettingsThunk,
    makeAccountPrivateThunk, onErrorMessageShown, onNewEmailChanged, onNewNicknameChanged
} from "./reducers";

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
        builder.addCase(getAccountSettingsThunk.rejected, (state) => {
            state.isAccountSettingsLoading = false
        })
        builder.addCase(getAccountSettingsThunk.fulfilled, (state) => {
            state.isAccountSettingsLoading = false
        })

        builder.addCase(changeAccountEmailThunk.pending, (state) => {
            state.isEmailChanging = true
        })
        builder.addCase(changeAccountEmailThunk.rejected, (state) => {
            state.isEmailChanging = false
        })
        builder.addCase(changeAccountEmailThunk.fulfilled, (state) => {
            state.isEmailChanging = false
        })

        builder.addCase(makeAccountPrivateThunk.pending, (state) => {
            state.isAccountVisibilityChanging = true
        })
        builder.addCase(makeAccountPrivateThunk.rejected, (state) => {
            state.isAccountVisibilityChanging = false
        })
        builder.addCase(makeAccountPrivateThunk.fulfilled, (state) => {
            state.isAccountVisibilityChanging = false
        })

        builder.addCase(changeAccountNicknameThunk.pending, (state) => {
            state.isNicknameChanging = true
        })
        builder.addCase(changeAccountNicknameThunk.rejected, (state) => {
            state.isNicknameChanging = false
        })
        builder.addCase(changeAccountNicknameThunk.fulfilled, (state) => {
            state.isNicknameChanging = false
        })

        builder.addCase(deleteAccountThunk.pending, (state) => {
            state.isAccountDeleting = true
        })
        builder.addCase(deleteAccountThunk.rejected, (state) => {
            state.isAccountDeleting = false
        })
        builder.addCase(deleteAccountThunk.fulfilled, (state) => {
            state.isAccountDeleting = false
        })
    }
})

export const settingsActions = settingsSlice.actions