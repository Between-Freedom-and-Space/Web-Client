import {ReactionState} from "./types";

export function getReactionStateValue(state: ReactionState) {
    return state === ReactionState.NOT_REACTED ? 'not-reacted' : 'reacted'
}