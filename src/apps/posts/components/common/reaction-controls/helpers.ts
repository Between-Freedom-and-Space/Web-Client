import {PostReactionState} from "../types";

export function getLikeState(postReactionState: PostReactionState): string {
    return postReactionState === PostReactionState.LIKED ? 'reacted' : 'not-reacted'
}

export function getDislikeState(postReactionState: PostReactionState): string {
    return postReactionState === PostReactionState.DISLIKED ? 'reacted' : 'not-reacted'
}