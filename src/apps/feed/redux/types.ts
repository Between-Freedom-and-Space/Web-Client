export interface FeedState {
    subscriptionsPostsLoading: boolean
    popularPostsLoading: boolean
    popularProfilesLoading: boolean

    subscriptionsPosts: Array<FeedPost>
    popularProfiles: Array<PopularProfile>
    popularPosts: Array<PopularPost>

    errorMessage?: string
}

export interface PopularProfile {
    profileId: number,
    profileIconUrl?: string
    nickname: string
    name: string
    postsCount: number
    followersCount: number
    isUserFollowing: boolean
    isFollowingLoading: boolean
}

export interface PopularPost {
    postId: number
    profileIconUrl?: string
    nickname: string
    name: string
    postTitle: string
    postText: string
}

export interface FeedPost {
    postId: number
    profileIconUrl?: string
    nickname: string
    postTitle: string
    postText: string
    likesCount: number
    dislikesCount: number
    commentsCount: number
    reactionState: FeedPostReactionState,
    createdAt: Date
    comments: Array<FeedPostComment>
}

export enum FeedPostReactionState {
    NOT_REACTED,
    LIKED,
    DISLIKED
}

export interface FeedPostComment {
    id: number
    profileIconUrl?: string
    nickname: string
    commentText: string
    createdAt: Date
}

export interface ReactPostActionData {
    postId: number
    targetReaction: 'like' | 'dislike'
}

export type ProfileId = number