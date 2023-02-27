export interface PostPreviewComment {
    readonly id: number
    readonly profileIconUrl?: string // TODO() support profile icon
    readonly nickname: string
    readonly commentText: string
    readonly lastModifiedDate: Date
}

export interface PostPreviewController {

    onFollowButtonClicked(): void

    onProfileIconClicked(): void

    onNicknameClicked(): void

    onPostTextClicked(): void

    onLikeClicked(): void

    onDislikeClicked(): void
}