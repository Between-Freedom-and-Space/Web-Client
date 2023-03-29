import {ProfileFollowersState, ProfileState} from "../../redux/types";

export function getFollowingIsActive(state: ProfileState): boolean {
    return state.profileFollowersState === ProfileFollowersState.SHOW_FOLLOWING
}

export function getFollowersIsActive(state: ProfileState): boolean {
    return state.profileFollowersState === ProfileFollowersState.SHOW_FOLLOWERS
}