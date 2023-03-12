import {FeedState} from "./types";

export function onErrorMessageShown(state: FeedState): FeedState {
    return {
        ...state,
        errorMessage: undefined
    }
}