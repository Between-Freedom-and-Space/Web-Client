import {createSlice} from "@reduxjs/toolkit";
import {PostEditState, PostEditType} from "./edit-types";
import {
    createPostThunk,
    onEditTypeChanged,
    onErrorMessageShown, onPostTextChanged,
    onPostTitleChanged,
    updatePostThunk
} from "./edit-reducers";
import {getPostThunk} from "./complete-reducers";

const postEditInitialState: PostEditState = {
    postId: undefined,
    postTitle: '',
    postText: '',
    type: PostEditType.NEW_POST,
    isLoading: false,
    isSaveLoading: false,
    errorMessage: undefined,
}

export const postEditSlice = createSlice({
    name: 'edit-post',
    initialState: postEditInitialState,
    reducers: {
        errorShown: onErrorMessageShown,
        changeType: onEditTypeChanged,
        setPostTitle: onPostTitleChanged,
        setPostText: onPostTextChanged,
    },
    extraReducers: (builder) => {
        builder.addCase(getPostThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getPostThunk.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(getPostThunk.fulfilled, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(updatePostThunk.pending, (state) => {
            state.isSaveLoading = true
        })
        builder.addCase(updatePostThunk.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(updatePostThunk.fulfilled, (state, action) => {
            state.isLoading = false
        })

        builder.addCase(createPostThunk.pending, (state) => {
            state.isSaveLoading = true
        })
        builder.addCase(createPostThunk.rejected, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(createPostThunk.fulfilled, (state, action) => {
            state.isLoading = false
        })
    }
})

export const postEditActions = postEditSlice.actions