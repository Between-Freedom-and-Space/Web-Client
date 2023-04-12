export interface PostCompleteState {
    readonly authorId: number
    readonly authorName: string
    readonly authorNickname: string
    readonly authorProfileIconUrl?: string // TODO()

    readonly postId: number
    readonly postTitle: string
    readonly postText: string
    readonly postLikesCount: number
    readonly postDislikesCount: number
    readonly postCommentsCount: number

    readonly isUserFollowing: boolean
    readonly isLoading: boolean
    readonly errorMessage?: string

    readonly comments: Array<PostCompleteComment>
}

export interface PostCompleteComment {
    readonly authorId: number
    readonly authorNickname: string
    readonly authorName: string
    readonly authorProfileIconUrl?: string // TODO()

    readonly commentId: number
    readonly commentText: string
    readonly likesCount: number
    readonly dislikesCount: number

    readonly isReactLoading: boolean
}