import {CommentReactionState, ReactionState} from "./types";

export function getReactionStateValue(state: ReactionState): string {
    return state === ReactionState.NOT_REACTED ? 'not-reacted' : 'reacted'
}

export function getLikeState(state: CommentReactionState): ReactionState {
    return state === CommentReactionState.LIKED ? ReactionState.REACTED : ReactionState.NOT_REACTED
}

export function getDislikeState(state: CommentReactionState): ReactionState {
    return state === CommentReactionState.DISLIKED ? ReactionState.REACTED : ReactionState.NOT_REACTED
}

export function formatDate(date: Date): string {
    return date.toLocaleString()
}