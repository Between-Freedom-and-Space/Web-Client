export interface CommentController {

    onLikeClicked(): void

    onDislikeClicked(): void

    onIconClicked(): void

    onNicknameClicked(): void

    onCommentTextClicked(): void
}

export enum CommentReactionState {
    NOT_REACTED,
    LIKED,
    DISLIKED,
    HIDDEN
}

export enum ReactionState {
    NOT_REACTED,
    REACTED
}