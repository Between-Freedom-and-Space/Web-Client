export enum FollowControlsState {
    USER_IS_FOLLOWING,
    USER_IS_NOT_FOLLOWING
}

export interface FollowControlsController {

    onFollowButtonClicked(): void
}