import {SearchState, ShowingState} from "./types";
import {PayloadAction} from "@reduxjs/toolkit";

export function onErrorMessageShown(state: SearchState): SearchState {
    return {
        ...state,
        errorMessage: undefined,
    }
}

export function onShowingStateChanged(
    state: SearchState,
    action: PayloadAction<ShowingState>,
): SearchState {
    return {
        ...state,
        showingState: action.payload
    }
}