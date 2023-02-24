export interface CommentController {

    onLikeClicked(): void

    onDislikeClicked(): void

    onIconClicked(): void

    onNicknameClicked(): void

    onCommentTextClicked(): void
}

export enum ReactionState {
    NOT_REACTED,
    REACTED
}