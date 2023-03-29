// noinspection DuplicatedCode

import {createSlice} from "@reduxjs/toolkit";
import {ProfileFollowersState, ProfileState} from "./types";
import {
    followProfileThunk,
    getProfileFollowersThunk,
    getProfileFollowingThunk,
    getProfileInformationThunk,
    onErrorShown, onFollowersStateChanged,
    onSortPostsClicked,
    reactPostThunk
} from "./reducers";
import {SortField, SortType} from "../components/profile-posts/posts-controls/types";

const profileInitialState: ProfileState = {
    profileId: 0,
    profileIconUrl: "",
    profileName: "",
    profileNickname: "",
    profileDescription: "",
    profileLocation: "",
    followersCount: 0,
    followingCount: 0,
    isUserProfile: false,
    userIsFollowingProfile: false,
    isProfileDataLoading: false,
    isFollowLoading: false,
    isSaveLoading: false,
    isProfileFollowingLoading: false,
    errorMessage: undefined,
    posts: Array.of(),
    profileFollowers: Array.of(),
    profileFollowing: Array.of(),
    profileFollowersState: ProfileFollowersState.SHOW_FOLLOWERS,
    selectedSortField: SortField.DATE,
    selectedSortType: SortType.ASC
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInitialState,
    reducers: {
        sortPosts: onSortPostsClicked,
        errorShown: onErrorShown,
        followersStateChange: onFollowersStateChanged,
    },
    extraReducers: (builder => {
        builder.addCase(reactPostThunk.pending, (state) => {
            // TODO add loading component
        })
        builder.addCase(reactPostThunk.rejected, (state, action) => {
            state.errorMessage = action.payload
        })
        builder.addCase(reactPostThunk.fulfilled, (state, action) => {
            state.posts = state.posts.map((post) => {
                if (post.postId !== action.payload.postId) {
                    return {...post}
                } else {
                    return {
                        ...post,
                        reactionState: action.payload.reactionState
                    }
                }
            })
        })

        builder.addCase(followProfileThunk.pending, (state) => {
            state.isFollowLoading = true
        })
        builder.addCase(followProfileThunk.rejected, (state, action) => {
            state.isFollowLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(followProfileThunk.fulfilled, (state, action) => {
            state.isFollowLoading = false
            state.userIsFollowingProfile = action.payload.userFollowingProfile
        })

        builder.addCase(getProfileInformationThunk.pending, (state) => {
            state.isProfileDataLoading = true
        })
        builder.addCase(getProfileInformationThunk.rejected, (state, action) => {
            state.isProfileDataLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(getProfileInformationThunk.fulfilled, (state, action) => {
            state.isProfileDataLoading = false
        })

        builder.addCase(getProfileFollowersThunk.pending, (state) => {
            state.isProfileFollowingLoading = true
        })
        builder.addCase(getProfileFollowersThunk.rejected, (state, action) => {
            state.isProfileFollowingLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(getProfileFollowersThunk.fulfilled, (state, action) => {
            state.isProfileFollowingLoading = false
            state.profileFollowers = action.payload.followers
        })

        builder.addCase(getProfileFollowingThunk.pending, (state) => {
            state.isProfileFollowingLoading = true
        })
        builder.addCase(getProfileFollowingThunk.rejected, (state, action) => {
            state.isProfileFollowingLoading = false
            state.errorMessage = action.payload
        })
        builder.addCase(getProfileFollowingThunk.fulfilled, (state, action) => {
            state.isProfileFollowingLoading = false
            state.profileFollowing = action.payload.following
        })
    })
})

export const profileActions = profileSlice.actions
