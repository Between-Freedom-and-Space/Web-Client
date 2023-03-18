import {PostReactionState} from "../../../posts/components/common/types";
import {FeedPost, PopularPost, PopularProfile} from "../../redux/types";

export interface FollowProfileResult {
    type: 'success' | 'failure'
    profileId: number
}

export interface FollowProfileFailure extends FollowProfileResult {
    type: 'failure'
    message: string
}

export interface FollowProfileSuccess extends FollowProfileResult {
    type: 'success'
    isUserFollowing: boolean
}

export interface ReactPostResult {
    type: 'success' | 'failure'
    postId: number
}

export interface ReactPostSuccess extends ReactPostResult {
    type: 'success'
    currentReaction: PostReactionState
}

export interface ReactPostFailure extends ReactPostResult {
    type: 'failure'
    message: string
}

export interface GetPopularPostsResult {
    type: 'success' | 'failure'
}

export interface GetPopularPostsFailure {
    type: 'failure',
    message: string
}

export interface GetPopularPostsSuccess {
    type: 'success'
    posts: Array<PopularPost>
}

export interface GetSubscriptionPostsResult {
    type: 'success' | 'failure'
}

export interface GetSubscriptionPostsFailure extends GetSubscriptionPostsResult {
    type: 'failure',
    message: string
}

export interface GetSubscriptionPostsSuccess extends GetSubscriptionPostsResult {
    type: 'success',
    posts: Array<FeedPost>,
}

export interface GetPopularProfilesResult {
    type: 'success' | 'failure'
}

export interface GetPopularProfilesFailure extends GetPopularProfilesResult {
    type: 'failure',
    message: string
}

export interface GetPopularProfilesSuccess extends GetPopularProfilesResult {
    type: 'success',
    profiles: Array<PopularProfile>
}

export enum Reaction {
    LIKE, DISLIKE
}