import {createSlice} from "@reduxjs/toolkit";
import {ProfileState} from "./types";
import {onErrorShown, onSortPostsClicked} from "./reducers";

const profileInitialState: ProfileState = {
    profileIconUrl: "",
    profileName: "",
    profileNickname: "",
    profileDescription: "",
    profileLocation: "",
    followersCount: 0,
    followingCount: 0,
    userIsFollowingProfile: false,
    isProfileDataLoading: false,
    isFollowLoading: false,
    isSaveLoading: false,
    errorMessage: undefined,
    posts: Array.of(),
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInitialState,
    reducers: {
        sortPosts: onSortPostsClicked,
        errorShown: onErrorShown,
    },
    extraReducers: (builder => {

    })
})

export const profileActions = profileSlice.actions
