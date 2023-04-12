import {injectable} from "inversify";
import {
    GetPostFailure,
    GetPostResult, ReactPostCommentFailure,
    ReactPostCommentResult,
    ReactPostFailure,
    ReactPostResult
} from "./posts-usecase.types";
import {PostReactionState} from "../../components/common/types";
import {CommentReactionState} from "../../../../common/components/comments/types";

@injectable()
export class PostsUseCase {

    public async getPost(postId: number): Promise<GetPostResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as GetPostFailure
    }

    public async reactPost(
        postId: number, reaction: PostReactionState
    ): Promise<ReactPostResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as ReactPostFailure
    }

    public async reactPostComment(
        postId: number,
        commentId: number,
        reaction: CommentReactionState
    ): Promise<ReactPostCommentResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as ReactPostCommentFailure
    }
}