// noinspection DuplicatedCode

import {SearchState, ShowingState} from "./types";
import {createSlice} from "@reduxjs/toolkit";
import {onErrorMessageShown, onSearchTextChanged, onShowingStateChanged, searchThunk} from "./reducers";

const initialSearchState: SearchState = {
    searchText: '',
    showingState: ShowingState.SHOWING_POSTS,
    isLoading: false,
    errorMessage: undefined,
    foundTotalCount: 0,
    foundPostsCount: 0,
    foundProfilesCount: 0,
    foundPosts: Array.of(),
    foundProfiles: Array.of(),
}

export const searchSlice = createSlice({
    name: 'search',
    initialState: initialSearchState,
    reducers: {
        errorShown: onErrorMessageShown,
        setShowingState: onShowingStateChanged,
        searchTextChanged: onSearchTextChanged,
    },
    extraReducers: (builder => {
        builder.addCase(searchThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(searchThunk.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(searchThunk.fulfilled, (state, action) => {
            state.isLoading = false

            state.foundPosts = action.payload.foundPosts
            state.foundProfiles = action.payload.foundProfiles
            state.foundPostsCount = action.payload.foundPosts.length
            state.foundProfilesCount = action.payload.foundProfiles.length
            state.foundTotalCount = state.foundProfilesCount + state.foundPostsCount
        })
    })
})


export const searchActions = searchSlice.actions