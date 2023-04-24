import {ProfilePostReactionState} from "../../redux/types";
import {GetProfileByIdResponse} from "../../api/profile-api.types";

export interface ReactPostResult {
    type: 'success' | 'failure'
}

export interface ReactPostFailure extends ReactPostResult {
    type: 'failure'
    message: string
}

export interface ReactPostSuccess extends ReactPostResult {
    type: 'success'
    postId: number
    reactionState: ProfilePostReactionState
}

export interface FollowProfileResult {
    type: 'success' | 'failure'
}

export interface FollowProfileFailure extends FollowProfileResult {
    type: 'failure'
    message: string
}

export interface FollowProfileSuccess extends FollowProfileResult {
    type: 'success',
    profileId: number
    userFollowingProfile: boolean
}

export interface GetProfileDataResult {
    type: 'success' | 'failure'
}

export interface GetProfileDataFailure extends GetProfileDataResult {
    type: 'failure'
    message: string
}

export interface GetProfileDataSuccess extends GetProfileDataResult {
    type: 'success'
    data: GetProfileByIdResponse
}