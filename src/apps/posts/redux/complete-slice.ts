import {createSlice} from "@reduxjs/toolkit";
import {PostCompleteState} from "./complete-types";
import {onErrorMessageShown} from "./complete-reducers";

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
    isUserFollowing: false,
    isLoading: false,
    errorMessage: undefined,
}

export const postCompleteSlice = createSlice({
    name: 'complete-post',
    initialState: postCompleteInitialState,
    reducers: {
        errorShown: onErrorMessageShown,
    },
    extraReducers: (builder) => {

    }
})

export const postCompleteActions = postCompleteSlice.actions