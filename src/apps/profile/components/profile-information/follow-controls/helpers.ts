import {FollowControlsState} from "./types";
import {ButtonState, ButtonType} from "../../../../../common/components/ui-kit/button/types";

export function getFollowButtonType(state: FollowControlsState): ButtonType {
    return state === FollowControlsState.USER_IS_NOT_FOLLOWING ? ButtonType.PRIMARY : ButtonType.SECONDARY
}

export function getFollowButtonState(isLoading: boolean): ButtonState {
    return isLoading ? ButtonState.LOADING : ButtonState.ACTIVE
}