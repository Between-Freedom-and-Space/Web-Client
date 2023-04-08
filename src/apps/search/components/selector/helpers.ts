import {ShowingState} from "../../redux/types";

export function getPostsIsActive(state: ShowingState): boolean {
    return state === ShowingState.SHOWING_POSTS
}

export function getProfilesIsActive(state: ShowingState): boolean {
    return state === ShowingState.SHOWING_PROFILES
}