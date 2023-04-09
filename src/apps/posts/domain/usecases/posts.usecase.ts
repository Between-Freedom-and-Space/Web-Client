import {injectable} from "inversify";
import {GetPostFailure, GetPostResult} from "./posts-usecase.types";

@injectable()
export class PostsUseCase {

    public async getPost(postId: number): Promise<GetPostResult> {
        return {
            type: 'failure',
            message: 'Not implemented yet'
        } as GetPostFailure
    }
}