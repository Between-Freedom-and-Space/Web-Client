import {PostCompleteState} from "./complete-types";

export function onErrorMessageShown(state: PostCompleteState): PostCompleteState {
    return {
        ...state,
        errorMessage: undefined,
    }
}