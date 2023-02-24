import {Response} from "../../../common/api/types";
import {Comment, CreateCommentRequest, UpdateCommentRequest} from "./comments-api.types";

export interface CommentsApi {

    getAllComments(): Promise<Response<Array<Comment>>>

    getCommentById(id: number): Promise<Response<Comment>>

    createComment(request: CreateCommentRequest): Promise<Response<Comment>>

    updateComment(request: UpdateCommentRequest): Promise<Response<Comment>>

    deleteComment(id: number): Promise<Response<undefined>>
}