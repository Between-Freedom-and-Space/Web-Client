import {createSlice} from "@reduxjs/toolkit";
import {SettingsState} from "./types";

const settingsInitialState: SettingsState = {

}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: settingsInitialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export const settingsActions = settingsSlice.actions