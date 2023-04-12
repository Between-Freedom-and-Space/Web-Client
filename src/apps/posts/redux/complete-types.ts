import {PostReactionState} from "../components/common/types";
import {CommentReactionState} from "../../../common/components/comments/types";

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
    readonly postReactionState: PostReactionState

    readonly isUserFollowing: boolean
    readonly isFollowLoading: boolean
    readonly isLoading: boolean
    readonly errorMessage?: string

    readonly comments: Array<PostCompleteComment>
}

export interface PostCompleteComment {
    readonly authorId: number
    readonly authorNickname: string
    readonly authorProfileIconUrl?: string // TODO()

    readonly commentId: number
    readonly commentText: string
    readonly lastModifiedDate: Date
    readonly likesCount: number
    readonly dislikesCount: number
    readonly commentReactionState: CommentReactionState

    readonly isReactLoading: boolean
}

export interface GetPostData {
    readonly postId: number
}

export interface ReactPostData {
    readonly postId: number
    readonly reactionState: PostReactionState
}

export interface ReactPostCommentData {
    readonly postId: number
    readonly commentId: number
    readonly reactionState: CommentReactionState
}