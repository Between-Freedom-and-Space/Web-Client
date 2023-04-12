import {PostReactionState} from "../../components/common/types";
import exp from "constants";
import {CommentReactionState} from "../../../../common/components/comments/types";

export interface GetPostResult {
    type: 'success' | 'failure'
}

export interface GetPostFailure extends GetPostResult {
    type: 'failure'
    message: string
}

export interface GetPostSuccess extends GetPostResult {
    type: 'success'
    post: Post
}

export interface ReactPostResult {
    type: 'success' | 'failure'
}

export interface ReactPostFailure extends ReactPostResult {
    type: 'failure'
    message: string
}

export interface ReactPostSuccess extends ReactPostResult {
    type: 'success'
    postId: number
    currentReaction: PostReactionState
}

export interface ReactPostCommentResult {
    type: 'success' | 'failure'
}

export interface ReactPostCommentFailure {
    type: 'failure'
    message: string
}

export interface ReactPostCommentSuccess {
    type: 'success'
    commentId: number
    currentReaction: CommentReactionState
}

export interface Post {
    id: number
}