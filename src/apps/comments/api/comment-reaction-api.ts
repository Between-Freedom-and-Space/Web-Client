import {Response} from "../../../common/api/types";
import {
    CommentReaction,
    CreateCommentReactionRequest,
    UpdateCommentReactionRequest
} from "./comment-reaction-api.types";

export interface CommentReactionApi {
    
    getAllReactions(): Promise<Response<Array<CommentReaction>>>

    getReactionById(id: number): Promise<Response<CommentReaction>>

    createReaction(request: CreateCommentReactionRequest): Promise<Response<CommentReaction>>

    updateReaction(request: UpdateCommentReactionRequest): Promise<Response<CommentReaction>>

    deleteReaction(id: number): Promise<Response<undefined>>
}