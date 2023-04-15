import {injectable} from "inversify";
import {
    CreatePostFailure,
    CreatePostResult,
    GetPostFailure,
    GetPostResult, ReactPostCommentFailure,
    ReactPostCommentResult,
    ReactPostFailure,
    ReactPostResult, UpdatePostFailure, UpdatePostResult
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

    public async updatePost(
        newTitle?: string,
        newText?: string
    ): Promise<UpdatePostResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as UpdatePostFailure
    }

    public async createPost(
        title: string,
        text: string
    ): Promise<CreatePostResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as CreatePostFailure
    }
}