export interface Comment {
    readonly id: number
    readonly authorId: number
    readonly text: string
    readonly createdDate: Date
    readonly updatedDate: Date
}

export interface CreateCommentRequest {
    readonly commentText: string
    readonly postId: number
}

export interface UpdateCommentRequest {
    readonly id: number
    readonly newCommentText: string
}