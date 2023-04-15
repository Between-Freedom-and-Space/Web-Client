import {CreatePostData, PostEditState, UpdatePostData} from "./edit-types";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    CreatePostFailure,
    CreatePostSuccess,
    UpdatePostFailure,
    UpdatePostSuccess
} from "../domain/usecases/posts-usecase.types";
import postsContainer from "../di/inversify.config";
import {PostsUseCase} from "../domain/usecases/posts.usecase";

const container = postsContainer

export function onErrorShown(state: PostEditState): PostEditState {
    return {
        ...state,
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