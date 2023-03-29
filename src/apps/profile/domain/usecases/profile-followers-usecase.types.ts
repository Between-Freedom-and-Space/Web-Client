import {ProfileBaseInformation} from "../../redux/types";

export interface GetProfileFollowersResult {
    type: 'success' | 'failure'
}

export interface GetProfileFollowersFailure extends GetProfileFollowersResult {
    type: 'failure'
    message: string
}

export interface GetProfileFollowersSuccess extends GetProfileFollowersResult {
    type: 'success'
    followers: Array<ProfileBaseInformation>
}

export interface GetProfileFollowingResult {
    type: 'success' | 'failure'
}

export interface GetProfileFollowingFailure extends GetProfileFollowingResult {
    type: 'failure'
    message: string
}

export interface GetProfileFollowingSuccess extends GetProfileFollowingResult {
    type: 'success'
    following: Array<ProfileBaseInformation>
}