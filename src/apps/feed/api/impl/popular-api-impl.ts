import {PopularApi} from "../endpoints/popular/popular-api";
import {injectable} from "inversify";
import {PopularPostsResponse, PopularProfilesResponse} from "../endpoints/popular/popular-api.types";
import {Response} from "../../../../common/api/types";
import {parseResponse} from "../../../../common/helpers/api-helper";

@injectable()
export class PopularApiImpl implements PopularApi {

    async getPopularPosts(): Promise<Response<PopularPostsResponse>> {
        return parseResponse(undefined);
    }

    async getPopularProfiles(): Promise<Response<PopularProfilesResponse>> {
        return parseResponse(undefined);
    }
}