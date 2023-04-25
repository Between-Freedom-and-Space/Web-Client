export interface CreatePostRequest {
    readonly postTitle: string
    readonly postText: string
    readonly isVisible: boolean
}

export interface CreatePostResponse {
    readonly postId: number
    readonly title: string
    readonly text: string
    readonly updatedDate: Date
}

export interface GetPostFullInformationResponse {
    readonly postId: number
    readonly title: string
    readonly text: string
    readonly likesCount: number
    readonly dislikesCount: number
    readonly commentsCount: number
    readonly comments: Array<PostFullInformationComment>
}

export interface PostFullInformationComment {
    readonly commentId: number
    readonly authorId: number
    readonly text: string
    readonly updatedDate: Date
}