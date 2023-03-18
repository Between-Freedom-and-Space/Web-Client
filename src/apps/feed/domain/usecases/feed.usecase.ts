import {injectable} from "inversify";
import {FeedPost, PopularPost, PopularProfile} from "../../redux/types";
import {
    FollowProfileResult,
    GetPopularPostsResult,
    GetPopularProfilesResult,
    GetSubscriptionPostsResult,
    Reaction,
    ReactPostResult
} from "./feed-usecase.types";

@injectable()
export class FeedUseCase {

    public async getPopularPosts(): GetPopularPostsResult {

    }

    public async getPopularProfiles(): GetPopularProfilesResult {

    }

    public async getSubscriptionPosts(): GetSubscriptionPostsResult {

    }

    public async reactPost(postId: number, reaction: Reaction): ReactPostResult {

    }

    public async followProfile(profileId: number): FollowProfileResult {

    }
}