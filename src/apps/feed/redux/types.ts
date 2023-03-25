export interface FeedState {
    readonly subscriptionsPostsLoading: boolean
    readonly popularPostsLoading: boolean
    readonly popularProfilesLoading: boolean

    readonly subscriptionsPosts: Array<FeedPost>
    readonly popularProfiles: Array<PopularProfile>
    readonly popularPosts: Array<PopularPost>

    readonly errorMessage?: string
}

export interface PopularProfile {
    readonly profileId: number,
    readonly profileIconUrl?: string
    readonly nickname: string
    readonly name: string
    readonly postsCount: number
    readonly followersCount: number
    readonly isUserFollowing: boolean
    readonly isFollowingLoading: boolean
}

export interface PopularPost {
    readonly postId: number
    readonly profileIconUrl?: string
    readonly nickname: string
    readonly name: string
    readonly postTitle: string
    readonly postText: string
}

export interface FeedPost {
    readonly postId: number
    readonly profileIconUrl?: string
    readonly nickname: string
    readonly postTitle: string
    readonly postText: string
    readonly likesCount: number
    readonly dislikesCount: number
    readonly commentsCount: number
    readonly reactionState: FeedPostReactionState,
    readonly createdAt: Date
    readonly comments: Array<FeedPostComment>
}

export enum FeedPostReactionState {
    NOT_REACTED,
    LIKED,
    DISLIKED
}

export interface FeedPostComment {
    readonly id: number
    readonly profileIconUrl?: string
    readonly nickname: string
    readonly commentText: string
    readonly createdAt: Date
}

export interface ReactPostActionData {
    postId: number
    targetReaction: 'like' | 'dislike'
}

export type ProfileId = number