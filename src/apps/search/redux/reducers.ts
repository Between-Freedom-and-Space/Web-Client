import {SearchState} from "./types";

export function onErrorMessageShown(state: SearchState): SearchState {
    return {
        ...state,
        errorMessage: undefined,
    }
}