import {CommentReactionApi} from "../comment-reaction-api";
import {
    CommentReaction,
    CreateCommentReactionRequest,
    UpdateCommentReactionRequest
} from "../comment-reaction-api.types";
import {injectable} from "inversify";
import {Response} from "../../../../common/api/types";

@injectable()
export class CommentReactionApiImpl implements CommentReactionApi {

    async createReaction(request: CreateCommentReactionRequest): Promise<Response<CommentReaction>> {
        throw 1
    }

    async deleteReaction(id: number): Promise<Response<undefined>> {
        throw 1
    }

    async getAllReactions(): Promise<Response<Array<CommentReaction>>> {
        throw 1
    }

    async getReactionById(id: number): Promise<Response<CommentReaction>> {
        throw 1
    }

    async updateReaction(request: UpdateCommentReactionRequest): Promise<Response<CommentReaction>> {
        throw 1
    }
}