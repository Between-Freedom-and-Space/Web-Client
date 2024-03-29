import {
    FollowProfileData,
    GetProfileData,
    GetProfileFollowersData,
    ProfileFollowersState,
    ProfilePostReactionState,
    ProfileState,
    ReactPostData,
    SortPostsData
} from "./types";
import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import profileContainer from "../di/inversify.config";
import {ProfileUseCase} from "../domain/usecases/profile.usecase";
import {
    FollowProfileFailure,
    FollowProfileSuccess,
    GetProfileDataFailure,
    GetProfileDataSuccess,
    ReactPostFailure,
    ReactPostSuccess
} from "../domain/usecases/profile-usecase.types";
import {ProfileSortUseCase} from "../domain/usecases/profile-sort.usecase";
import {PostReactionState} from "../../posts/components/common/types";
import {
    GetProfileFollowersFailure,
    GetProfileFollowersSuccess,
    GetProfileFollowingFailure,
    GetProfileFollowingSuccess
} from "../domain/usecases/profile-followers-usecase.types";
import {ProfileFollowersUseCase} from "../domain/usecases/profile-followers.usecase";
import {SortType} from "../components/profile-posts/posts-controls/types";

const container = profileContainer

export function onSortPostsClicked(
    state: ProfileState, action: PayloadAction<SortPostsData>
): ProfileState {
    const useCase = container.get<ProfileSortUseCase>(ProfileSortUseCase)

    const sortedPosts = useCase.sortUserPosts(
        [...state.posts],
        action.payload.field,
        action.payload.type
    )

    return {
        ...state,
        posts: sortedPosts,
        selectedSortField: action.payload.field,
        selectedSortType: action.payload.type === SortType.ASC
            ? SortType.DESC : SortType.ASC,
    }
}

export function onProfileIdChanged(
    state: ProfileState, action: PayloadAction<number>
): ProfileState {
    return {
        ...state,
        profileId: action.payload
    }
}

export function onErrorShown(
    state: ProfileState
): ProfileState {
    return {
        ...state,
        errorMessage: undefined,
    }
}

export function onFollowersStateChanged(
    state: ProfileState, action: PayloadAction<ProfileFollowersState>
): ProfileState {
    return {
        ...state,
        profileFollowersState: action.payload
    }
}

export const reactPostThunk = createAsyncThunk<
    ReactPostSuccess,
    ReactPostData,
    {rejectValue: string}
    >(
        'profile/react-post',
        async (actionData, {rejectWithValue}) => {
            const useCase = container.get<ProfileUseCase>(ProfileUseCase)

            const postReactionState = actionData.reactionState === ProfilePostReactionState.LIKED
                ? PostReactionState.LIKED : PostReactionState.DISLIKED
            const result = await useCase.reactPost(actionData.postId, postReactionState)

            if (result.type === 'failure') {
                return rejectWithValue((result as ReactPostFailure).message)
            } else {
                return result as ReactPostSuccess
            }
        }
    )

export const followProfileThunk = createAsyncThunk<
    FollowProfileSuccess,
    FollowProfileData,
    {rejectValue: string}
    >(
        'profile/follow',
        async (actionData, {rejectWithValue}) => {
            const useCase = container.get<ProfileUseCase>(ProfileUseCase)

            const result = await useCase.followProfile(actionData.profileId)

            if (result.type === 'failure') {
                return rejectWithValue((result as FollowProfileFailure).message)
            } else {
                return result as FollowProfileSuccess
            }
        }
    )

export const getProfileInformationThunk = createAsyncThunk<
    GetProfileDataSuccess,
    GetProfileData,
    {rejectValue: string}
    >(
        'profile/get',
        async (data, {rejectWithValue}) => {
            const useCase = container.get<ProfileUseCase>(ProfileUseCase)

            const result = await useCase.getProfileData(data.profileId)

            if (result.type === 'failure') {
                return rejectWithValue((result as GetProfileDataFailure).message)
            } else {
                return result as GetProfileDataSuccess
            }
        }
    )

export const getProfileFollowersThunk = createAsyncThunk<
    GetProfileFollowersSuccess,
    GetProfileFollowersData,
    {rejectValue: string}
    >(
        'profile/followers',
        async (actionData, {rejectWithValue}) => {
            const useCase = container.get<ProfileFollowersUseCase>(ProfileFollowersUseCase)

            const result = await useCase.getProfileFollowers(actionData.profileId)

            if (result.type === 'failure') {
                return rejectWithValue((result as GetProfileFollowersFailure).message)
            } else {
                return result as GetProfileFollowersSuccess
            }
        }
    )

export const getProfileFollowingThunk = createAsyncThunk<
    GetProfileFollowingSuccess,
    GetProfileFollowersData,
    {rejectValue: string}
    >(
        'profile/following',
        async (actionData, {rejectWithValue}) => {
            const useCase = container.get<ProfileFollowersUseCase>(ProfileFollowersUseCase)

            const result = await useCase.getProfileFollowing(actionData.profileId)

            if (result.type === 'failure') {
                return rejectWithValue((result as GetProfileFollowingFailure).message)
            } else {
                return result as GetProfileFollowingSuccess
            }
        }
    )