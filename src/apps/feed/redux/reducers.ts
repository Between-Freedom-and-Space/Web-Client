import {FeedState, ProfileId, ReactPostActionData} from "./types";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    FollowProfileFailure,
    FollowProfileSuccess,
    GetPopularPostsFailure,
    GetPopularPostsSuccess,
    GetPopularProfilesFailure,
    GetPopularProfilesSuccess,
    GetSubscriptionPostsFailure,
    GetSubscriptionPostsSuccess,
    Reaction, ReactPostFailure,
    ReactPostSuccess
} from "../domain/usecases/feed-usecase.types";
import {RootState} from "../../../config/redux.config";
import feedContainer from "../di/inversify.config";
import {FeedUseCase} from "../domain/usecases/feed.usecase";

const container = feedContainer

export function onErrorMessageShown(state: FeedState): FeedState {
    return {
        ...state,
        errorMessage: undefined
    }
}

export const getProfileSubscriptionsPostsThunk = createAsyncThunk<
    GetSubscriptionPostsSuccess,
    void,
    {rejectValue: string}
    >(
        'feed/get-subscriptions-posts',
        async (_, {rejectWithValue}) => {
            const useCase = container.get<FeedUseCase>(FeedUseCase)

            const result = await useCase.getSubscriptionPosts()

            if (result.type === 'failure') {
                return rejectWithValue((result as GetSubscriptionPostsFailure).message)
            } else {
                return result as GetSubscriptionPostsSuccess
            }
        }
    )

export const getPopularPostsThunk = createAsyncThunk<
    GetPopularPostsSuccess,
    void,
    {rejectValue: string}
    >(
        'feed/get-popular-posts',
        async (_, {rejectWithValue}) => {
            const useCase = container.get<FeedUseCase>(FeedUseCase)

            const result = await useCase.getPopularPosts()

            if (result.type === 'failure') {
                return rejectWithValue((result as GetPopularPostsFailure).message)
            } else {
                return result as GetPopularPostsSuccess
            }
        }
    )

export const getPopularProfilesThunk = createAsyncThunk<
    GetPopularProfilesSuccess,
    void,
    {rejectValue: string}
    >(
        'feed/get-popular-profiles',
        async (_, {rejectWithValue}) => {
            const useCase = container.get<FeedUseCase>(FeedUseCase)

            const result = await useCase.getPopularProfiles()

            if (result.type === 'failure') {
                return rejectWithValue((result as GetPopularProfilesFailure).message)
            } else {
                return result as GetPopularProfilesSuccess
            }
        }
    )

export const followProfileThunk = createAsyncThunk<
    FollowProfileSuccess,
    ProfileId,
    {rejectValue: string}
    >(
        'feed/follow-profile',
        async (profileId, {rejectWithValue}) => {
            const useCase = container.get<FeedUseCase>(FeedUseCase)

            const result = await useCase.followProfile(profileId)

            if (result.type === 'failure') {
                return rejectWithValue((result as FollowProfileFailure).message)
            } else {
                return result as FollowProfileSuccess
            }
        }
    )

export const reactPostThunk = createAsyncThunk<
    ReactPostSuccess,
    ReactPostActionData,
    {rejectValue: string, state: RootState}
    >(
        'feed/react-post',
        async (actionData, {rejectWithValue}) => {
            const useCase = container.get<FeedUseCase>(FeedUseCase)

            const action = actionData.targetReaction === 'like' ? Reaction.LIKE : Reaction.DISLIKE
            const result = await useCase.reactPost(actionData.postId, action)

            if (result.type === 'failure') {
                return rejectWithValue((result as ReactPostFailure).message)
            } else {
                return result as ReactPostSuccess
            }
        }
    )