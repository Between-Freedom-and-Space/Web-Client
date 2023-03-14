import {ButtonState, ButtonType} from "../../ui-kit/button/types";
import config from './assets/config.json'

export function getFollowButtonType(isFollowing: boolean): ButtonType {
    return isFollowing ? ButtonType.PRIMARY : ButtonType.SECONDARY
}

export function getFollowButtonState(isLoading: boolean): ButtonState {
    return isLoading ? ButtonState.LOADING : ButtonState.ACTIVE
}

export function getFollowButtonLabel(isFollowing: boolean): string {
    return isFollowing ? config.following_button.is_following_label : config.following_button.not_following_label
}