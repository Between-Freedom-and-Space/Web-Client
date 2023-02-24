import {CommentsApi} from "../comments-api";
import {Comment, CreateCommentRequest, UpdateCommentRequest} from "../comments-api.types";
import {Response} from "../../../../common/api/types";
import {inject, injectable} from "inversify";
import {AxiosInstance} from "axios";
import TYPES from "../../di/types";
import {parseResponse} from "../../../../common/helpers/api-helper";

@injectable()
export class CommentsApiImpl implements CommentsApi {

    @inject(TYPES.CommentAxiosInstance)
    private axios: AxiosInstance | undefined

    async createComment(request: CreateCommentRequest): Promise<Response<Comment>> {
        const response = await this.axios!!.patch('/comment/create', {
            comment_text: request.commentText,
            post_id: request.postId,
        })

        return parseResponse(response.data, this.parseComment)
    }

    async deleteComment(id: number): Promise<Response<undefined>> {
        const response = await this.axios!!.delete(`/comment/${id}/delete`)

        return parseResponse(response.data, _ => undefined)
    }

    async getAllComments(): Promise<Response<Array<Comment>>> {
        const response = await this.axios!!.get('/comment/all')

        return parseResponse(response.data, (content: Array<any>) => {
            return content.map(this.parseComment)
        })
    }

    async getCommentById(id: number): Promise<Response<Comment>> {
        const response = await this.axios!!.get(`/comment/${id}`)

        return parseResponse(response.data, this.parseComment)
    }

    async updateComment(request: UpdateCommentRequest): Promise<Response<Comment>> {
        const response = await this.axios!!.put(`/comment/${request.id}/update`, {
            new_comment_text: request.newCommentText
        })

        return parseResponse(response.data, this.parseComment)
    }

    // noinspection JSMethodCanBeStatic
    private parseComment(content: any): Comment {
        return {
            id: content['id'],
            authorId: content['author_id'],
            text: content['text'],
            createdDate: content['created_date'],
            updatedDate: content['updated_date']
        }
    }
}