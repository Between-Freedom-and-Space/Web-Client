import {CreatePostRequest, CreatePostResponse, GetPostFullInformationResponse} from "./posts-api.types";
import {Response} from "../../../../../common/api/types";

export interface PostsApi {

    createPost(request: CreatePostRequest): Promise<Response<CreatePostResponse>>

    getFullPostInformation(postId: number): Promise<Response<GetPostFullInformationResponse>>
}