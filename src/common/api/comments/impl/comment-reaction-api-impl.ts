import {CommentReactionApi} from "../comment-reaction-api";
import {
    CommentReaction,
    CreateCommentReactionRequest,
    UpdateCommentReactionRequest
} from "../comment-reaction-api.types";
import {Response} from "../../types";
import {AxiosInstance} from "axios";
import {parseResponse} from "../../../helpers/api-helper";

export class CommentReactionApiImpl implements CommentReactionApi {

    public constructor(private axios: AxiosInstance) {
    }

    async createReaction(request: CreateCommentReactionRequest): Promise<Response<CommentReaction>> {
        const response = await this.axios.patch('/reaction/comment/create', {
            comment_reaction: request.reaction,
            author_id: request.authorId,
            comment_id: request.commentId
        })

        return parseResponse(response.data, this.parseReaction)
    }

    async deleteReaction(id: number): Promise<Response<undefined>> {
        const response = await this.axios.delete(`/reaction/comment/${id}/delete`)

        return parseResponse(response.data, (_ => undefined))
    }

    async getAllReactions(): Promise<Response<Array<CommentReaction>>> {
        const response = await this.axios.get('/reaction/comment/all')

        return parseResponse(response.data, (content: Array<any>) => {
            return content.map(this.parseReaction)
        })
    }

    async getReactionById(id: number): Promise<Response<CommentReaction>> {
        const response = await this.axios.get(`/reaction/comment/${id}`)

        return parseResponse(response.data, this.parseReaction)
    }

    async updateReaction(request: UpdateCommentReactionRequest): Promise<Response<CommentReaction>> {
        const response = await this.axios.put(`/reaction/comment/${request.id}/update`, {
            new_comment_reaction: request.newReaction
        })

        return parseResponse(response.data, this.parseReaction)
    }

    // noinspection JSMethodCanBeStatic
    private parseReaction(content: any): CommentReaction {
        return {
            id: content['id'],
            authorId: content['author_id'],
            reaction: content['reaction'],
            createdDate: content['created_date'],
            updatedDate: content['updated_date']
        }
    }
}