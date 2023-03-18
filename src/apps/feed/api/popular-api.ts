import {Response} from "../../../common/api/types";
import {PopularPostsResponse, PopularProfilesResponse} from "./popular-api.types";

export interface PopularApi {

    getPopularPosts(): Promise<Response<PopularPostsResponse>>

    getPopularProfiles(): Promise<Response<PopularProfilesResponse>>
}