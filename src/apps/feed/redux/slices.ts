import {createSlice} from "@reduxjs/toolkit";
import {FeedState} from "./types";
import {onErrorMessageShown} from "./reducers";

const feedInitialState: FeedState = {
    subscriptionsPostsLoading: false,
    popularPostsLoading: false,
    popularProfilesLoading: false,

    subscriptionsPosts: Array.of(),
    popularProfiles: Array.of(),
    popularPosts: Array.of(),

    errorMessage: undefined,
}

export const feedSlice = createSlice({
    name: 'feed',
    initialState: feedInitialState,
    reducers: {
        errorShown: onErrorMessageShown,
    },
    extraReducers: (builder) => {

    }
})


export const feedActions = feedSlice.actions