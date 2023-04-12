import {GetPostData, PostCompleteState, ReactPostCommentData, ReactPostData} from "./complete-types";
import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {
    GetPostFailure,
    GetPostSuccess, ReactPostCommentFailure, ReactPostCommentSuccess,
    ReactPostFailure,
    ReactPostSuccess
} from "../domain/usecases/posts-usecase.types";
import postsContainer from "../di/inversify.config";
import {PostsUseCase} from "../domain/usecases/posts.usecase";

const container = postsContainer

export function onErrorMessageShown(state: PostCompleteState): PostCompleteState {
    return {
        ...state,
        errorMessage: undefined,
    }
}

export function onPostIdChanged(
    state: PostCompleteState,
    action: PayloadAction<number>
): PostCompleteState {
    return {
        ...state,
        postId: action.payload,
    }
}

export const getPostThunk = createAsyncThunk<
    GetPostSuccess,
    GetPostData,
    {rejectValue: string}
    >(
        "post/get",
        async (data, {rejectWithValue}) => {
            const useCase = container.get<PostsUseCase>(PostsUseCase)

            const result = await useCase.getPost(data.postId)

            if (result.type === 'failure') {
                return rejectWithValue((result as GetPostFailure).message)
            } else {
                return result as GetPostSuccess
            }
        }
    )

export const followProfileThunk = createAsyncThunk(
    "post/follow-profile",
    async () => {
        console.log("follow profile thunk")
    }
)

export const reactPostThunk = createAsyncThunk<
    ReactPostSuccess,
    ReactPostData,
    {rejectValue: string}
>(
    "post/react",
    async (data, {rejectWithValue}) => {
        const useCase = container.get<PostsUseCase>(PostsUseCase)

        const result = await useCase.reactPost(data.postId, data.reactionState)

        if (result.type === 'failure') {
            return rejectWithValue((result as ReactPostFailure).message)
        } else {
            return result as ReactPostSuccess
        }
    }
)

export const reactCommentThunk = createAsyncThunk<
    ReactPostCommentSuccess,
    ReactPostCommentData,
    {rejectValue: string}
    >(
        "post/react-comment",
        async (data, {rejectWithValue}) => {
            const useCase = container.get<PostsUseCase>(PostsUseCase)

            const result = await useCase.reactPostComment(data.postId, data.commentId, data.reactionState)

            if (result.type === 'failure') {
                return rejectWithValue((result as ReactPostCommentFailure).message)
            } else {
                return result as ReactPostCommentSuccess
            }
        }
    )