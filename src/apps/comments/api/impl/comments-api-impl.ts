import {CommentsApi} from "../comments-api";
import {Comment, CreateCommentRequest, UpdateCommentRequest} from "../comments-api.types";
import {Response} from "../../../../common/api/types";
import {inject, injectable} from "inversify";
import {AxiosInstance} from "axios";
import TYPES from "../../di/types";

@injectable()
export class CommentsApiImpl implements CommentsApi {

    @inject(TYPES.CommentAxiosInstance)
    private axios: AxiosInstance | undefined

    async createComment(request: CreateCommentRequest): Promise<Response<Comment>> {
        const response = this.axios!!.patch('/comment/create', {
            comment_text: request.commentText,
            post_id: request.postId,
        })
        throw 1;
    }

    async deleteComment(id: number): Promise<Response<undefined>> {
        const response = this.axios!!.delete(`/comment/${id}/delete`)
        throw 1;
    }

    async getAllComments(): Promise<Response<Array<Comment>>> {
        const response = this.axios!!.get('/comment/get/all')
        throw 1;
    }

    async getCommentById(id: number): Promise<Response<Comment>> {
        const response = this.axios!!.get(`/comment/${id}/get`)
        throw 1;
    }

    async updateComment(request: UpdateCommentRequest): Promise<Response<Comment>> {
        const response = this.axios!!.put(`/comment/${request.id}/update`, {
            new_comment_text: request.newCommentText
        })
        throw 1;
    }
}