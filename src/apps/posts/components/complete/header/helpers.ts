import {ButtonState} from "../../../../../common/components/ui-kit/button/types";

export function getFollowButtonLabel(isUserFollowing: boolean): string {
    return isUserFollowing ? 'Unfollow' : 'Follow'
}

export function getFollowButtonState(followLading: boolean): ButtonState {
    return followLading ? ButtonState.LOADING : ButtonState.ACTIVE
}