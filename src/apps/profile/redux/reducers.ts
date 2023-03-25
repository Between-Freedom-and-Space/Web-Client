import {ProfileState, SortPostsData} from "./types";
import {PayloadAction} from "@reduxjs/toolkit";

export function onSortPostsClicked(
    state: ProfileState, action: PayloadAction<SortPostsData>
): ProfileState {
    return state
}

export function onErrorShown(
    state: ProfileState
): ProfileState {
    return {
        ...state,
        errorMessage: undefined,
    }
}