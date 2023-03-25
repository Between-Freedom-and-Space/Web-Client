import {createSlice} from "@reduxjs/toolkit";
import {ProfileState} from "./types";

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
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState: profileInitialState,
    reducers: {

    },
    extraReducers: (builder => {

    })
})

export const profileActions = profileSlice.actions
