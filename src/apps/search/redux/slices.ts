import {SearchState, ShowingState} from "./types";
import {createSlice} from "@reduxjs/toolkit";
import {onErrorMessageShown, onShowingStateChanged} from "./reducers";

const initialSearchState: SearchState = {
    searchText: '',
    showingState: ShowingState.SHOWING_POSTS,
    isLoading: false,
    errorMessage: undefined,
    foundPosts: Array.of(),
    foundProfiles: Array.of(),
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: initialSearchState,
    reducers: {
        errorShown: onErrorMessageShown,
        setShowingState: onShowingStateChanged,
    },
    extraReducers: (builder => {

    })
})


export const searchActions = searchSlice.actions