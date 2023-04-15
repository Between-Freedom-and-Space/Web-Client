import {createSlice} from "@reduxjs/toolkit";
import {PostEditState} from "./edit-types";

const postEditInitialState: PostEditState = {

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