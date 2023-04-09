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
}