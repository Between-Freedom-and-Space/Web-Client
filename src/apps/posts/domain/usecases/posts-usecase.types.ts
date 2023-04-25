import {PostReactionState} from "../../components/common/types";
import exp from "constants";
import {CommentReactionState} from "../../../../common/components/comments/types";
import {GetPostFullInformationResponse} from "../../api/posts-api.types";

export interface GetPostResult {
    type: 'success' | 'failure'
}

export interface GetPostFailure extends GetPostResult {
    type: 'failure'
    message: string
}

export interface GetPostSuccess extends GetPostResult {
    type: 'success'
    post: GetPostFullInformationResponse
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

export interface UpdatePostResult {
    type: 'success' | 'failure'
}

export interface UpdatePostFailure extends UpdatePostResult {
    type: 'failure'
    message: string
}

export interface UpdatePostSuccess extends UpdatePostResult {
    type: 'success'
    postData: Post
}

export interface CreatePostResult {
    type: 'success' | 'failure'
}

export interface CreatePostFailure extends CreatePostResult {
    type: 'failure'
    message: string
}

export interface CreatePostSuccess extends CreatePostResult {
    type: 'success'
    postId: number
}

export interface Post {
    id: number
}