export interface GetProfileByIdResponse {
    readonly profileId: number
    readonly nickname: string
    readonly name: string
    readonly description?: string
    readonly location?: string
    readonly followersCount: number
    readonly followingCount: number
    readonly isUserProfile: boolean
    readonly isUserFollowingProfile: boolean
    readonly posts: Array<ProfilePost>
}

export interface ProfilePost {
    readonly id: number
    readonly title: string
    readonly text: string
    readonly likesCount: number
    readonly dislikesCount: number
    readonly commentsCount: number
    readonly createdAt: Date
    readonly userReaction: string
    readonly comments: Array<ProfilePostComment>
}

export interface ProfilePostComment {
    readonly id: number
    readonly authorNickname: string
    readonly text: string
    readonly createdAt: Date
}