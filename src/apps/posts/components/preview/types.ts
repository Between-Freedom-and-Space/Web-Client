import {CommentController} from "../../../../common/components/comments/types";

export interface PostPreviewComment {
    readonly id: number
    readonly profileIconUrl?: string // TODO() support profile icon
    readonly nickname: string
    readonly commentText: string
    readonly lastModifiedDate: Date,
    readonly controller?: CommentController
}

export interface PostPreviewController {

    onFollowButtonClicked(): void

    onProfileIconClicked(): void

    onNicknameClicked(): void

    onPostTextClicked(): void

    onLikeClicked(): void

    onDislikeClicked(): void

    onCommentClicked(): void
}