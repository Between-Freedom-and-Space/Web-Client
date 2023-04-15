import {PostEditState} from "./edit-types";
import {createAsyncThunk} from "@reduxjs/toolkit";

export function onErrorShown(state: PostEditState): PostEditState {
    return {
        ...state,
    }
}

export const updatePostThunk = createAsyncThunk(
    'post/update',
    async () => {

    }
)

export const createPostThunk = createAsyncThunk(
    'post/create',
    async () => {

    }
)