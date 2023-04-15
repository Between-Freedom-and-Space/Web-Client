import {createSlice} from "@reduxjs/toolkit";
import {PostEditState, PostEditType} from "./edit-types";

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

    },
    extraReducers: (builder) => {

    }
})

export const postEditActions = postEditSlice.actions