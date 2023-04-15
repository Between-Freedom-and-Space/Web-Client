import {CreatePostData, PostEditState, PostEditType, UpdatePostData} from "./edit-types";
import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {
    CreatePostFailure,
    CreatePostSuccess,
    UpdatePostFailure,
    UpdatePostSuccess
} from "../domain/usecases/posts-usecase.types";
import postsContainer from "../di/inversify.config";
import {PostsUseCase} from "../domain/usecases/posts.usecase";

const container = postsContainer

export function onErrorMessageShown(state: PostEditState): PostEditState {
    return {
        ...state,
    }
}

export function onEditTypeChanged(
    state: PostEditState,
    action: PayloadAction<PostEditType>
): PostEditState {
    return {
        ...state,
        type: action.payload
    }
}

export function onPostTitleChanged(
    state: PostEditState,
    action: PayloadAction<string>
): PostEditState {
    return {
        ...state,
        postTitle: action.payload
    }
}

export function onPostTextChanged(
    state: PostEditState,
    action: PayloadAction<string>
): PostEditState {
    return {
        ...state,
        postText: action.payload,
    }
}

export const updatePostThunk = createAsyncThunk<
    UpdatePostSuccess,
    UpdatePostData,
    {rejectValue: string}
    >(
    'post/update',
    async (data, {rejectWithValue}) => {
        const useCase = container.get<PostsUseCase>(PostsUseCase)

        const result = await useCase.updatePost(data.newTitle, data.newText)

        if (result.type === 'failure') {
            return rejectWithValue((result as UpdatePostFailure).message)
        } else {
            return result as UpdatePostSuccess
        }
    }
)

export const createPostThunk = createAsyncThunk<
    CreatePostSuccess,
    CreatePostData,
    {rejectValue: string}
    >(
    'post/create',
    async (data, {rejectWithValue}) => {
        const useCase = container.get<PostsUseCase>(PostsUseCase)

        const result = await useCase.createPost(data.title, data.text)

        if (result.type === 'failure') {
            return rejectWithValue((result as CreatePostFailure).message)
        } else {
            return result as CreatePostSuccess
        }
    }
)