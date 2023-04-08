import {SearchState} from "./types";
import {createSlice} from "@reduxjs/toolkit";

const initialSearchState: SearchState = {
    searchText: '',
    isLoading: false,
    errorMessage: undefined,
    foundPosts: Array.of(),
    foundProfiles: Array.of(),
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: initialSearchState,
    reducers: {

    },
    extraReducers: (builder => {

    })
})


export const searchActions = searchSlice.actions