import {LastPostedApi} from "../endpoints/last-posted/last-posted-api";
import {injectable} from "inversify";
import {SubscriptionsPostsResponse} from "../endpoints/last-posted/last-posted-api.types";
import {Response} from "../../../../common/api/types";
import {parseResponse} from "../../../../common/helpers/api-helper";

@injectable()
export class LastPostedApiImpl implements LastPostedApi {

    async getSubscriptionsPosts(): Promise<Response<SubscriptionsPostsResponse>> {
        return parseResponse(undefined)
    }
}