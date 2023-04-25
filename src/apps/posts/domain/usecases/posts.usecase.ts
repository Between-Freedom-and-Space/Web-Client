import {inject, injectable} from "inversify";
import {
    CreatePostFailure,
    CreatePostResult, CreatePostSuccess,
    GetPostFailure,
    GetPostResult, GetPostSuccess, ReactPostCommentFailure,
    ReactPostCommentResult,
    ReactPostFailure,
    ReactPostResult, UpdatePostFailure, UpdatePostResult
} from "./posts-usecase.types";
import {PostReactionState} from "../../components/common/types";
import {CommentReactionState} from "../../../../common/components/comments/types";
import {PostsApi} from "../../api/posts-api";
import {TYPES} from "../../di/types";

@injectable()
export class PostsUseCase {

    @inject(TYPES.PostsApi)
    private postsApi: PostsApi | undefined

    public async getPost(postId: number): Promise<GetPostResult> {
        const {content, error} = await this.postsApi!.getFullPostInformation(postId)
        if (!content) {
            return {
                type: 'failure',
                message: error?.message || 'Something went wrong'
            } as GetPostFailure
        }
        return {
            type: 'success',
            post: content
        } as GetPostSuccess
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
        const {content, error} = await this.postsApi!.createPost({
            postTitle: title, postText: text, isVisible: true
        })
        if (!content) {
            return {
                type: 'failure',
                message: error?.message || 'Something went wrong'
            } as CreatePostFailure
        }
        return {
            type: 'success',
            postId: content.postId
        } as CreatePostSuccess
    }
}