// noinspection DuplicatedCode

import {createSlice} from "@reduxjs/toolkit";
import {FeedState} from "./types";
import {
    followProfileThunk,
    getPopularPostsThunk, getPopularProfilesThunk,
    getProfileSubscriptionsPostsThunk,
    onErrorMessageShown,
    reactPostThunk
} from "./reducers";

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
        builder.addCase(getPopularPostsThunk.pending, (state) => {
            state.popularPostsLoading = true
        })
        builder.addCase(getPopularPostsThunk.rejected, (state, action) => {
            state.popularPostsLoading = false
        })
        builder.addCase(getPopularPostsThunk.fulfilled, (state, action) => {
            state.popularPostsLoading = false
        })

        builder.addCase(getProfileSubscriptionsPostsThunk.pending, (state, action) => {
            state.subscriptionsPostsLoading = true
        })
        builder.addCase(getProfileSubscriptionsPostsThunk.rejected, (state, action) => {
            state.subscriptionsPostsLoading = false
        })
        builder.addCase(getProfileSubscriptionsPostsThunk.fulfilled, (state, action) => {
            state.subscriptionsPostsLoading = false
        })

        builder.addCase(getPopularProfilesThunk.pending, (state) => {
            state.popularProfilesLoading = true
        })
        builder.addCase(getPopularProfilesThunk.rejected, (state, action) => {
            state.popularProfilesLoading = false
        })
        builder.addCase(getPopularProfilesThunk.fulfilled, (state, action) => {
            state.popularProfilesLoading = false
        })

        // builder.addCase(reactPostThunk.pending, (state) => {
        //
        // })
        // builder.addCase(reactPostThunk.rejected, (state, action) => {
        //
        // })
        // builder.addCase(reactPostThunk.fulfilled, (state, action) => {
        //
        // })
        //
        // builder.addCase(followProfileThunk.pending, (state) => {
        //
        // })
        // builder.addCase(followProfileThunk.rejected, (state, action) => {
        //
        // })
        // builder.addCase(followProfileThunk.fulfilled, (state, action) => {
        //
        // })
    }
})


export const feedActions = feedSlice.actions