import {createSlice} from "@reduxjs/toolkit";
import {PostCompleteState} from "./complete-types";
import {
    followProfileThunk,
    getPostThunk,
    onErrorMessageShown,
    onPostIdChanged,
    reactCommentThunk,
    reactPostThunk
} from "./complete-reducers";
import {PostReactionState} from "../components/common/types";

const postCompleteInitialState: PostCompleteState = {
    authorId: 0,
    authorName: '',
    authorNickname: '',
    postId: 0,
    postTitle: '',
    postText: '',
    postLikesCount: 0,
    postDislikesCount: 0,
    postCommentsCount: 0,
    postReactionState: PostReactionState.NOT_REACTED,
    isUserFollowing: false,
    isFollowLoading: false,
    isLoading: false,
    errorMessage: undefined,
    comments: Array.of()
}

export const postCompleteSlice = createSlice({
    name: 'complete-post',
    initialState: postCompleteInitialState,
    reducers: {
        errorShown: onErrorMessageShown,
        changePostId: onPostIdChanged,
    },
    extraReducers: (builder) => {
        builder.addCase(getPostThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getPostThunk.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(getPostThunk.fulfilled, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(reactPostThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(reactPostThunk.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(reactPostThunk.fulfilled, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(reactCommentThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(reactCommentThunk.rejected, (state, action) => {
            state.isLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(reactCommentThunk.fulfilled, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(followProfileThunk.pending, (state) => {
            console.log("follow pending")
        })
        builder.addCase(followProfileThunk.rejected, (state, action) => {
            console.log("follow rejected")
        })
        builder.addCase(followProfileThunk.fulfilled, (state, action) => {
            console.log("follow fulfilled")
        })
    }
})

export const postCompleteActions = postCompleteSlice.actions