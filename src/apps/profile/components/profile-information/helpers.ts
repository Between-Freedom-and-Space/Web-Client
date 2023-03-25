import {FollowControlsState} from "./follow-controls/types";

export function getFollowingControlsState(isUserFollowing: boolean): FollowControlsState {
    return isUserFollowing ? FollowControlsState.USER_IS_FOLLOWING : FollowControlsState.USER_IS_NOT_FOLLOWING
}