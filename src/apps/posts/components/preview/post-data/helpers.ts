import {PostFollowingState} from "../../common/types";
import config from './assets/config.json'

export function getFollowButtonLabel(state: PostFollowingState): string {
    if (state == PostFollowingState.USER_IS_FOLLOWING) {
        return config["follow-button"]["user-is-following"].label
    }
    return config["follow-button"]["user-is-not-following"].label
}