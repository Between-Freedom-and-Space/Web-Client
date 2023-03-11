export interface CommentReaction {
    readonly id: number
    readonly authorId: number
    readonly reaction: Reaction
    readonly createdDate: Date
    readonly updatedDate: Date
}

export interface CreateCommentReactionRequest {
    readonly reaction: Reaction
    readonly authorId: number
    readonly commentId: number
}

export interface UpdateCommentReactionRequest {
    readonly id: number
    readonly newReaction: Reaction
}

export enum Reaction {
    LIKE,
    DISLIKE
}