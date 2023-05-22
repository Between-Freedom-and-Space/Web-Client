import {Response} from "../../../../../common/api/types";
import {SubscriptionsPostsResponse} from "./last-posted-api.types";

export interface LastPostedApi {
    
    getSubscriptionsPosts(): Promise<Response<SubscriptionsPostsResponse>>
}